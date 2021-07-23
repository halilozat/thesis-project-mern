import React, { useContext, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input, Modal } from '@material-ui/core';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Cancel, PermMedia } from "@material-ui/icons"

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        oot: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    },
}));


export default function SimpleModal() {

    const { user } = useContext(AuthContext);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const name = useRef();
    const writer = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newBook = {
            userId: user._id,
            name: name.current.value,
            writer: writer.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newBook.img = fileName;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            await axios.post("/books", newBook);
            window.location.reload();
        } catch (err) { }
    };

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>

                <input
                    placeholder="Kitap Adı"
                    ref={name}
                />
                <br />
                <input
                    placeholder="Yazar Adı"
                    ref={writer}
                />
                <br />
                <br />
            <form onSubmit={submitHandler}>   
                <Button variant="contained" color="primary" type="submit">Ekle</Button>
                <br />
                <Button variant="contained" color="secondary" onClick={handleClose}>Kapat</Button>
            </form>

        </div>
    );

    return (
        <div>
            <button type="button" className="sidebarAddButton" onClick={handleOpen}>
                Kitap Ekle
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}