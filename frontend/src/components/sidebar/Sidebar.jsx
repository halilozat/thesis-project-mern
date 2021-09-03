import React, { useState, useEffect } from "react";
import { NavDropdown,Dropdown, SplitButton, Navbar, Nav, Container } from 'react-bootstrap'
import "./sidebar.css"
import {
    RssFeed,
    PlayCircleFilledOutlined,
    Event,
    MenuBook,
    EventNote,
    Movie,
    LocalMovies,
    WhatsApp,
    Home
} from "@material-ui/icons";
import BookModal from '../modals/BookModal'
import SerieModal from '../modals/SerieModal'
import MovieModal from '../modals/MovieModal'
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from 'react-intl';


const content = {
    "tr-TR": {
        home: "Ana Sayfa",
        chats: "Sohbet",
        videos: "Videolar",
        books: "Kitaplar",
        movies: "Filmler",
        series: "Diziler",
        myNotes: "Notlarım",
        events: "Etkinlikler"
    },
    "en-EN": {
        home: "Home",
        chats: "Chats",
        videos: "Videos",
        books: "Books",
        movies: "Movies",
        series: "Series",
        myNotes: "My Notes",
        events: "Events"
    }
}


export default function Sidebar() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const isLocalLanguage = localStorage.getItem('language')
    const defaultLocale = isLocalLanguage ? isLocalLanguage : navigator.language;
    const [language, setLanguage] = useState(defaultLocale);

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])


    return (
        <div className="sidebar">

            <IntlProvider locale={language} messages={content[language]}>

                <div className="sidebarWrapper">
                    <hr className="sidebarHr" />
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Home fontSize="large" className="sidebarIcon side" />
                            <span className="sidebarListItemText">
                                <FormattedMessage id="home" />
                            </span>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/messenger" style={{ textDecoration: "none", color: "white" }}>
                                <WhatsApp fontSize="large" className="sidebarIcon" />
                                <span className="sidebarListItemText">
                                    <FormattedMessage id="chats" />
                                </span>
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <PlayCircleFilledOutlined fontSize="large" className="sidebarIcon" />
                            <span className="sidebarListItemText">
                                <FormattedMessage id="videos" />
                            </span>
                        </li>
                        <li className="sidebarListItem">
                            <MenuBook fontSize="large" className="sidebarIcon" />
                            <span className="sidebarListItemText">
                                <FormattedMessage id="books" />
                            </span>
                        </li>
                        <li className="sidebarListItem">
                            <Movie fontSize="large" className="sidebarIcon" />
                            <span className="sidebarListItemText">
                                <FormattedMessage id="movies" />
                            </span>
                        </li>
                        <li className="sidebarListItem">
                            <LocalMovies fontSize="large" className="sidebarIcon" />
                            <span className="sidebarListItemText">
                                <FormattedMessage id="series" />
                            </span>
                        </li>
                        <li className="sidebarListItem">
                            <EventNote fontSize="large" className="sidebarIcon" />
                            <span className="sidebarListItemText">
                                <FormattedMessage id="myNotes" />
                            </span>
                        </li>
                        <li className="sidebarListItem">
                            <Event fontSize="large" className="sidebarIcon" />
                            <span className="sidebarListItemText">
                                <FormattedMessage id="events" />
                            </span>
                        </li>

                    </ul>

                    <hr className="sidebarHr" />

                    <BookModal />
                    <SerieModal />
                    <MovieModal />

                    <hr className="sidebarHr" />

                    
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button onClick={() => setLanguage('tr-TR')}>TR</button>
                    <button onClick={() => setLanguage('en-EN')}>EN</button>

                </div>
            </IntlProvider>
        </div>
    )
}
