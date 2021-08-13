import React, { useState } from "react";
import "./sidebar.css"
import {
    RssFeed,
    PlayCircleFilledOutlined,
    Event,
    MenuBook,
    EventNote,
    Movie,
    LocalMovies,
    WhatsApp
} from "@material-ui/icons";
import BookModal from '../modals/BookModal'
import SerieModal from '../modals/SerieModal'
import MovieModal from '../modals/MovieModal'
import { Link } from "react-router-dom";




export default function Sidebar() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <hr className="sidebarHr" />
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Link to="/messenger" style={{ textDecoration: "none", color: "white" }}>
                            <WhatsApp fontSize="large" className="sidebarIcon" />
                            <span className="sidebarListItemText">Chats</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <MenuBook fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Books</span>
                    </li>
                    <li className="sidebarListItem">
                        <Movie fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Movies</span>
                    </li>
                    <li className="sidebarListItem">
                        <LocalMovies fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Series</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventNote fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">My Notes</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event fontSize="large" className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                   
                </ul>
                <hr className="sidebarHr" />
                
                <BookModal />
                <SerieModal />
                <MovieModal />

                <hr className="sidebarHr" />

            </div>

        </div>
    )
}
