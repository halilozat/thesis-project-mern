import "./topbar.css"
import { Search } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import Burger from "../burgerMenu/Burger";


export default function Topbar() {

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
