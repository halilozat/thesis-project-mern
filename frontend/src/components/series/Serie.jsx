import React, { useEffect, useState } from 'react'
import './serie.scss'
import {
    Share,
    Favorite,
    ChatBubble
} from "@material-ui/icons";
import ThesisService from '../../services/ThesisService';

const Serie = ({ serie }) => {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await ThesisService.FetchUserByUserId(serie.userId)
            setUser(res.data)
        }
        fetchUser()
    }, [serie.userId])

    return (
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={publicFolder + serie.img} alt=""/>
                    <h1>{serie.name}</h1>
                    <h4>{serie.point} Puan</h4>
                    <span className="minutes">İnceleyen: {user.username}</span>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        <br />
                        <br />

                        {serie?.desc}
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
                    background: `url(${publicFolder + serie.img})`,
                }}
            ></div>
        </div >
    )
}

export default Serie
