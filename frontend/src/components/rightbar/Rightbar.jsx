import "./rightbar.css";
import Categories from "../categories/Categories";
import axios from 'axios'
import Weekly from "../weekly/Weekly";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove, Work, LocationOn, Cake, Favorite, Movie, Theaters, MenuBook, TrackChanges, Info } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";

export default function Rightbar({ user }) {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(
        currentUser.followings.includes(user?.id)
    );

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put(`/users/${user._id}/unfollow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put(`/users/${user._id}/follow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
            setFollowed(!followed);
        } catch (err) {
        }
    };


    const HomeRightbar = () => {
        return (
            <>
                <Weekly />

                <Categories />

                {/* <img className="rightbarAd" src={`${publicFolder}manzara.jpg`} alt="" /> */}


                
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <h4 className="rightbarTitle"><Info />Kullanıcı Bilgileri<Info /></h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><LocationOn /> Şehir :</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><Cake /> Doğum Yeri :</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><Work /> Meslek :</span>
                        <span className="rightbarInfoValue">Yazılım Mühendisliği</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><Favorite /> İlişki Durumu :</span>
                        <span className="rightbarInfoValue">
                            {user.relationship === 1
                                ? "Single"
                                : user.relationship === 1
                                    ? "Married"
                                    : "-"}
                        </span>
                    </div>
                </div>

                <h4 className="rightbarTitle"><TrackChanges />2021 Hedefleri<TrackChanges /></h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><MenuBook /> Okuduğu Kitaplar :</span>
                        <span className="rightbarInfoValue">40/100</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><Theaters /> İzlediği Filmler :</span>
                        <span className="rightbarInfoValue">20/50</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey"><Movie /> İzlediği Diziler :</span>
                        <span className="rightbarInfoValue">5/15</span>
                    </div>

                </div>

                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    {friends.map((friend) => (
                        <Link
                            to={"/profile/" + friend.username}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="rightbarFollowing">
                                <img
                                    src={
                                        friend.profilePicture
                                            ? publicFolder + friend.profilePicture
                                            : publicFolder + "person/noAvatar.png"
                                    }
                                    alt=""
                                    className="rightbarFollowingImg"
                                />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}