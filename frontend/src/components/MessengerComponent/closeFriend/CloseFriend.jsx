/** Styles */
import './closeFriend.css'

export default function CloseFriend({user}) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER  
  
  return (
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={publicFolder + user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    );
  }
