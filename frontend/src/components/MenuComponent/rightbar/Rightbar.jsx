/** Dependencies */
import styled from 'styled-components';
import axios from 'axios'
import { Link } from "react-router-dom";
import { Add, Remove, Work, LocationOn, Cake, Favorite, Movie, Theaters, MenuBook, TrackChanges, Info } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";

/** Components */
import Categories from "./categories/Categories";
import Weekly from "./weekly/Weekly";

/** Contexts */
import { AuthContext } from '../../../context/AuthContext'

/** Services */
import ThesisService from "../../../services/ThesisService";

/** Styles */
import "./rightbar.css";
const RightUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;  
  z-index: 10;
  @media (max-width: 1024px) {
    align-items: center;
    background-color: #2e3236;
    position: fixed;
    padding-top: 5rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 4.3rem;
    .rightBar{
        top: 4.3rem;
    }

    right: 0;
    height: 100vh;
    width: 400px;
    transition: transform 0.3s ease-in-out !important;
    li {
      color: #fff;
    }
  }
`;




export default function Rightbar({ user, open }) {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(
        currentUser.followings.includes(user?.id)
    );

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await ThesisService.GetUserFriends(user._id);
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
            <RightUl open={open}>
                <li>

                    <div className="rightBar">
                        <Weekly />

                        <Categories />

                        <img className="rightbarAd" src={`${publicFolder}manzara.jpg`} alt="" />

                    </div>
                </li>
            </RightUl>
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
                <Link to={`${user.username}`}>
                        <div className="rightbarInfoItem">
                            <span className="rightbarInfoKey"><MenuBook /> Okuduğu Kitaplar :</span>
                            <span className="rightbarInfoValue">40/100</span>
                        </div>
                    </Link>
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

                {user.username === currentUser.username && (
                    <button className="rightbarEditButton" >
                        Profili Düzenle
                    </button>
                )}
                {user.username === currentUser.username && (
                    <Link to="/myNotes">
                        <button className="rightbarEditButton" >
                            Notlarım
                        </button>
                    </Link>
                )}
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