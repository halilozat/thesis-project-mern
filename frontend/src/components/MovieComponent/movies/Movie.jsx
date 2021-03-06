/** Dependencies */
import React, { useEffect, useState } from 'react'
import {
    Share,
    Favorite,
    ChatBubble
} from "@material-ui/icons";

/** Styles */
import './movie.scss'

/** Services */
import ThesisService from '../../../services/ThesisService';


export default function Movie({ movie }) {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await ThesisService.GetMovie(movie.userId)
            setUser(res.data)
        }
        fetchUser()
    }, [movie.userId])

    return (

        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={publicFolder + movie.img} alt=""/>
                    <h1>{movie.name}</h1>
                    <h4>{movie.point} Puan</h4>
                    <span className="minutes">İnceleyen: {user.username}</span>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        <br />
                        <br />

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
