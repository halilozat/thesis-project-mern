import React, { useState } from "react";
import "./sidebar.css"
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
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
                        <Chat fontSize="large" className="sidebarIcon" />
                        <Link to="/messenger" style={{ textDecoration: "none", color:"white" }}>
                            <span className="sidebarListItemText">Chats</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School fontSize="large" className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
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
