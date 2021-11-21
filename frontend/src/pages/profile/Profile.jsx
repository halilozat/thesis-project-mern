/** Dependencies */
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Col } from 'react-bootstrap'

/** Components */
import Topbar from "../../components/MenuComponent/topbar/Topbar";
import Sidebar from "../../components/MenuComponent/sidebar/Sidebar";
import Feed from "../../components/PostComponent/feed/Feed";
import Rightbar from "../../components/MenuComponent/rightbar/Rightbar";

/** Contexts */
import ThemeContext from "../../context/ThemeContext"

/** Services */
import ThesisService from "../../services/ThesisService";

/** Styles */
import "./profile.css";


export default function Profile() {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await ThesisService.FetchUserByUsername(username);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);


  return (
    <div className={`theme ${theme}`}>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? publicFolder + user.coverPicture
                    : publicFolder + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? publicFolder + user.profilePicture
                    : publicFolder + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Col md={8}>
              <Feed username={username} />
            </Col>
            <Col>
              <Rightbar user={user} />
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
}