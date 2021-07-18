import "./online.css";

export default function Online({user}) {
  
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER 
  
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={publicFolder + user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}