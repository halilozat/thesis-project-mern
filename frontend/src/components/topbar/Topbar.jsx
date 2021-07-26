import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from '../../apiCalls'


export default function Topbar() {

  const { user, dispatch } = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = () => {
    logoutCall(
      dispatch
    );
  }


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo" >Thesis</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          {/* <span className="topbarLink">Home</span>
          <span className="topbarLink">Profile</span> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person fontSize="large" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat fontSize="large" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications fontSize="large" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <div class="dropdown">
          <img src={
            user.profilePicture
              ? publicFolder + user.profilePicture
              : publicFolder + "person/noAvatar.png"
          }
            alt=""
            className="topbarImg"
          />
          <div class="dropdown-content">
            <Link style={{ textDecoration: "none", textAlign:"left"}} to={`/profile/${user.username}`}>
              <a >Profile Git!</a>
            </Link>
            <a className="dropdown-content" onClick={handleClick} style={{ textDecoration: "none", cursor:"pointer", textAlign:"center"}}> Sign out</a>
          </div>
        </div>

      </div>
    </div>
  )
}
