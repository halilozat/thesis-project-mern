import { useState, useEffect } from "react"
import "./post.css"
import { MoreVert } from "@material-ui/icons";
import {
  Chat,
  Favorite
} from "@material-ui/icons";
import axios from 'axios'


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [])

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture || "assets/person/noAvatar.png"} 
              alt=""
            />
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite onClick={likeHandler} fontSize="large" color="secondary" cursor="pointer" />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <Chat onClick={likeHandler} fontSize="large" color="secondary" cursor="pointer" />
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}