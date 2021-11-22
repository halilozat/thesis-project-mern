import "./topbar.scss"
import { Search } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import Burger from "../burgerMenu/Burger";

export default function Topbar() {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo" >
            <img
              src={
                publicFolder + "logo/logo6.png"
              }
              alt=""
            />
          </span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search..."
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
