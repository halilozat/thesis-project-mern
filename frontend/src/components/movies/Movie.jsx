import React, { useEffect, useState } from 'react'
import './movie.scss'
import axios from 'axios'
import {
    Share,
    Favorite,
    ChatBubble
} from "@material-ui/icons";

export default function Movie({ movie }) {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${movie.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [movie.userId])

    return (

        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={publicFolder + movie.img} />
                    <h1>{movie.name}</h1>
                    <h4>{movie.writer}</h4>
                    <span className="minutes">İnceleyen: {user.username}</span>
                    {/* <p className="type">Action, Crime, Fantasy</p> */}
                </div>
                <div className="movie_desc">
                    <p className="text">
                        {movie?.desc}
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
                    background: `url(${publicFolder + movie.img})`,
                }}
            ></div>
        </div >





    )
}
