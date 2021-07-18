import { useState, useEffect } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from 'axios'

export default function Feed({ username }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("posts/profile/" + username)
                : await axios.get("posts/timeline/60e224dcafeeb219480021e3")
            setPosts(res.data)
        }
        fetchPosts()
    }, [username])

    return (
        <div>
            <div className="feed">
                <div className="feedWrapper">
                    <Share />
                    {posts.map((p) => (
                        <Post key={p._id} post={p} />
                    ))}


                </div>
            </div>
        </div>
    )
}
