import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {

    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("/users/friends/" + currentId);
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    }, [friends, onlineUsers]);

    const handleClick = async (user) => {
        try {
            const res = await axios.get(
                `/conversations/find/${currentId}/${user._id}`
            );
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {onlineFriends.map((o) => (
                <li>

                    <div className="d-flex bd-highlight" onClick={() => handleClick(o)}>
                        <div className="img_cont">
                            <img
                                src={
                                    o?.profilePicture
                                        ? publicFolder + o.profilePicture
                                        : publicFolder + "person/noAvatar.png"
                                }
                                className="rounded-circle user_img" />
                            <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                            <span>{o?.username}</span>
                            <p>{o?.username} is online</p>
                        </div>
                    </div>
                </li>
            ))}
        </>
    )
}
