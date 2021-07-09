import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { MovieIcon, LocalMovies, MenuBook } from '@material-ui/icons/Movie';

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="weekly">
                    <h4 className="rightbarTitle">Haftanın Güzelleri</h4>
                    <div className="birthdayContainer">
                        <img className="birthdayImg" src="assets/filmm.jpg" alt="" />
                        <span className="birthdayText">
                            <span className="book">Haftanin Filmi </span>
                            <button className="secilen">Esaretin Bedeli</button>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="birthdayContainer">
                        <img className="birthdayImg" src="assets/dizi.png" alt="" />
                        <span className="birthdayText">
                            <span className="book">Haftanin Dizisi </span>
                            <button className="secilen">Loki</button>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="birthdayContainer">
                        <img className="birthdayImg" src="assets/book.png" alt="" />
                        <span className="birthdayText">
                            <span className="book">Haftanin Kitabi </span>
                            <button className="secilen">Suç ve Ceza</button>
                        </span>
                    </div>
                </div>

                <div className="weekly">
                    <h4 className="rightbarTitle">Kategoriler</h4>
                    <div className="birthdayContainer">
                        <span className="birthdayText">
                            <button className="secilen"></button>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="birthdayContainer">
                        <span className="birthdayText">
                            <button className="secilen"></button>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="birthdayContainer">
                        <span className="birthdayText">
                            <button className="secilen"></button>
                        </span>
                    </div>
                </div>

                <img className="rightbarAd" src="assets/manzara.jpg" alt="" />


                <h4 className="rightbarTitle">Online Friends</h4>

                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/1.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/2.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/3.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/4.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/5.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/6.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}