import React, { useContext, useEffect, useState } from 'react'
import './book.scss'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"

export default function Book({ book }) {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const { user: currentUser } = useContext(AuthContext)

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${book.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [book.userId])

    return (
        <div classNameName="book">
            <div classNameName="bookWrapper">
                <div className="container">
                    <div className="mobile-layout">
                        <div className="notification-header">
                            <div className="time">
                                19:07
                            </div>
                            <div className="necessities">
                                <i className="fas fa-signal"></i>
                                <i className="fas fa-wifi"></i>
                                <i className="fas fa-battery-full"></i>
                            </div>
                        </div>
                        <div className="actions">
                            <i className="fas fa-chevron-left"></i>
                            <i className="fas fa-bookmark"></i>
                        </div>
                        <div className="book-cover">
                            <img
                                className="book-top"
                                // src="https://i.pinimg.com/originals/52/ec/12/52ec12f7dd324864949267c92cce2e43.jpg" 
                                src={publicFolder + book.img}
                                alt="book-top" />
                            <img className="book-side" src="https://saranyamk.github.io/images-repo/book-side.svg" alt="book-side" />
                        </div>
                        <div className="preface">
                            <div className="content">
                                <div className="header">
                                    <div className="title">{book?.name}</div>
                                    <div className="icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                                <div className="author">Yazar: {book?.writer}</div>
                                <div className="author">İnceleyen: {user.username}</div>
                                <div className="body">
                                    <p>
                                        {book?.desc}
                                    </p>
                                    {/* <p>
                                        Anne calls her diary "Kitty", so almost all of the letters are written to Kitty.
                                    </p> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
