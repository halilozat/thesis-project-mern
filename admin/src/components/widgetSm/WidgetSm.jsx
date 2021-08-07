import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users/getall?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">En Yeni Üyeler</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li key={user._id} className="widgetSmListItem">
            <img
              src={
                user.profilePicture
                  ? publicFolder + user.profilePicture
                  : "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
            alt=""
            className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Görüntüle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
