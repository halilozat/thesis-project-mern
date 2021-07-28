import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null)
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async () => {
            try {
                const res = await axios("/users?userId=" + friendId);
                setUser(res.data)
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <>
            {/* <li class="active">
                <div class="d-flex bd-highlight">
                    <div class="img_cont">
                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                        <span>Halil</span>
                        <p>Halil is online</p>
                    </div>
                </div>
            </li> */}

            <li>
                <div class="d-flex bd-highlight">
                    <div class="img_cont">
                        {/* <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" class="rounded-circle user_img" /> */}
                        <img
                            src=
                            {
                                user?.profilePicture
                                    ? publicFolder + user.profilePicture
                                    : publicFolder + "person/noAvatar.png"
                            }
                            class="rounded-circle user_img" />
                        <span class="online_icon offline"></span>
                    </div>
                    <div class="user_info">
                        <span>{user.username}</span>
                        <p>Melih left 50 mins ago</p>
                    </div>
                </div>
            </li>

        </>
    )
}
