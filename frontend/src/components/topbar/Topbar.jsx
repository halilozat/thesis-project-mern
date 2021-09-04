import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from '../../apiCalls'
import ThemeContext from "../../context/ThemeContext"
import Burger from "../burgerMenu/Burger";


export default function Topbar() {

  const { user, dispatch } = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { theme, setTheme } = useContext(ThemeContext)


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
        <Burger />
      </div>
    </div>
  )
}
