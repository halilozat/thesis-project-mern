import React, { useEffect, useState } from 'react'
import './book.scss'
import axios from 'axios'
import {
    Share,
    Favorite,
    ChatBubble
} from "@material-ui/icons";
// import { format } from 'timeago.js'
// import { Link } from 'react-router-dom'

export default function Book({ book }) {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    // const { user: currentUser } = useContext(AuthContext)

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${book.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [book.userId])

    return (

        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={publicFolder + book.img} />
                    <h1>{book.name}</h1>
                    <h4>{book.writer}</h4>
                    <span className="minutes">İnceleyen: {user.username}</span>
                    {/* <p className="type">Action, Crime, Fantasy</p> */}
                </div>
                <div className="movie_desc">
                    <p className="text">
                        {book?.desc}
                    </p>
                </div>
                <div className="movie_social">
                    <ul>
                        <li><i><Share /></i></li>
                        <li><i><Favorite /></i></li>
                        <li><i><ChatBubble /></i></li>
                    </ul>
                </div>
            </div>
            <div
                className="blur_back bright_back"
                style={{
                    background: `url(${publicFolder + book.img})`,
                }}
            ></div>
        </div >






        // <div classNameNameName="book">
        //     <div classNameNameName="bookWrapper">
        //         <div classNameName="container">
        //             <div classNameName="mobile-layout">
        //                 <div classNameName="notification-header">
        //                     <div classNameName="time">
        //                         19:07
        //                     </div>
        //                     <div classNameName="necessities">
        //                         <i classNameName="fas fa-signal"></i>
        //                         <i classNameName="fas fa-wifi"></i>
        //                         <i classNameName="fas fa-battery-full"></i>
        //                     </div>
        //                 </div>
        //                 <div classNameName="actions">
        //                     <i classNameName="fas fa-chevron-left"></i>
        //                     <i classNameName="fas fa-bookmark"></i>
        //                 </div>
        //                 <div classNameName="book-cover">
        //                     <img
        //                         classNameName="book-top"
        //                         // src="https://i.pinimg.com/originals/52/ec/12/52ec12f7dd324864949267c92cce2e43.jpg" 
        //                         src={publicFolder + book.img}
        //                         alt="book-top" />
        //                     <img classNameName="book-side" src="https://saranyamk.github.io/images-repo/book-side.svg" alt="book-side" />
        //                 </div>
        //                 <div classNameName="preface">
        //                     <div classNameName="content">
        //                         <div classNameName="header">
        //                             <div classNameName="title">{book?.name}</div>
        //                             <div classNameName="icon">
        //                                 <i classNameName="fas fa-chevron-down"></i>
        //                             </div>
        //                         </div>
        //                         <div classNameName="author">Yazar: {book?.writer}</div>
        //                         <div classNameName="author">İnceleyen: {user.username}</div>
        //                         <div classNameName="body">
        //                             <p>
        //                                 {book?.desc}
        //                             </p>
        //                             {/* <p>
        //                                 Anne calls her diary "Kitty", so almost all of the letters are written to Kitty.
        //                             </p> */}

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}
