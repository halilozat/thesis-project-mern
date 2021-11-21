/** Dependencies */
import { useEffect, useState } from 'react'

/** Services */
import ThesisService from '../../../services/ThesisService';


export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null)
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async () => {
            try {
                const res = await ThesisService.FetchUserByUserId(friendId);
                setUser(res.data)
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);



    return (
        <>
            <li>
                <div className="d-flex bd-highlight" style={{ cursor: "pointer" }}>
                    <div className="img_cont">
                        <img
                            src=
                            {
                                user?.profilePicture
                                    ? publicFolder + user.profilePicture
                                    : publicFolder + "person/noAvatar.png"
                            }
                            alt=""
                            className="rounded-circle user_img" />
                        
                    </div>
                    <div className="user_info">
                        <span>
                            {user?.username}
                        </span>
                        <p>Sohbete devam etmek için tıklayın.</p>
                    </div>
                </div>
            </li>

        </>
    )
}
