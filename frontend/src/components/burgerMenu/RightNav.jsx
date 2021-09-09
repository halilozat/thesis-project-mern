import React from 'react';
import styled from 'styled-components';
import { Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ThemeContext from '../../context/ThemeContext';
import { logoutCall } from '../../apiCalls';
import './topbar.css'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
 
  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: #2e3236;
    position: fixed;
    padding-top: 5rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {

  const { user, dispatch } = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { theme, setTheme } = useContext(ThemeContext)


  const handleClick = () => {
    logoutCall(
      dispatch
    );
  }

  return (
    <Ul className="topbarContainer" open={open}>
      <li style={{ marginRight: "30%" }}>
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
      </li>
      <hr />
      <li style={{ marginRight: "20%" }}>
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onClick={() => setTheme(theme === "light" ? 'dark' : 'light')} />
            <div className="slider round"></div>
          </label>
        </div>
      </li>
      <hr />
      <li style={{ marginRight: "20%" }}>
        {/* <div className="topbarLinks">
            <span className="topbarLink">Home</span>
          <span className="topbarLink">Profile</span>
          </div> */}





        <div className="dropdown">
          <img src={
            user.profilePicture
              ? publicFolder + user.profilePicture
              : publicFolder + "person/noAvatar.png"
          }
            alt=""
            className="topbarImg"
          />
          <div className="dropdown-content">
            <Link style={{ textDecoration: "none", textAlign: "left" }} to={`/profile/${user.username}`}>
              <div >Profile Git!</div>
            </Link>

            <a href="!#" style={{ color: "black", cursor: "pointer" }} onClick={() => setTheme(theme === "light" ? 'dark' : 'light')}>Temayı Değiştir</a>


            <a
              href="!#"
              className="dropdown-content"
              onClick={handleClick}
              style={{ textDecoration: "none", cursor: "pointer", textAlign: "center" }}
            >
              Sign out
            </a>


          </div>
        </div>

      </li>


    </Ul>
  )
}

export default RightNav