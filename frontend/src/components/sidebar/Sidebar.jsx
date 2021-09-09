import React, { useState, useEffect, useContext } from "react";
import "./sidebar.css"
import {
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
import { AuthContext } from "../../context/AuthContext";


const content = {
    "tr-TR": {
        home: "Ana Sayfa",
        chats: "Sohbet",
        videos: "Videolar",
        books: "Kitaplar",
        myBooks: "Kitaplarım",
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
        myBooks: "My Books",
        movies: "Movies",
        series: "Series",
        myNotes: "My Notes",
        events: "Events"
    }
}


export default function Sidebar() {
    
    const isLocalLanguage = localStorage.getItem('language')
    const defaultLocale = isLocalLanguage ? isLocalLanguage : navigator.language;
    const [language, setLanguage] = useState(defaultLocale);

    const { user } = useContext(AuthContext)



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
                            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                <Home fontSize="large" className="sidebarIcon side" />
                                <span className="sidebarListItemText">
                                    <FormattedMessage id="home" />
                                </span>
                            </Link>
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
                            <Link to="/books" style={{ textDecoration: "none", color: "white" }}>
                                <MenuBook fontSize="large" className="sidebarIcon" />
                                <span className="sidebarListItemText">
                                    <FormattedMessage id="books" />
                                </span>
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to={`/${user.username}`} style={{ textDecoration: "none", color: "white" }}>
                                <MenuBook fontSize="large" className="sidebarIcon" />
                                <span className="sidebarListItemText">
                                    <FormattedMessage id="myBooks" />
                                </span>
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/movies" style={{ textDecoration: "none", color: "white" }}>
                                <Movie fontSize="large" className="sidebarIcon" />
                                <span className="sidebarListItemText">
                                    <FormattedMessage id="movies" />
                                </span>
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/series" style={{ textDecoration: "none", color: "white" }}>
                                <LocalMovies fontSize="large" className="sidebarIcon" />
                                <span className="sidebarListItemText">
                                    <FormattedMessage id="series" />
                                </span>
                            </Link>
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
