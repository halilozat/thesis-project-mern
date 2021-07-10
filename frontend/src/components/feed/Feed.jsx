import { useState, useEffect } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from 'axios'

export default function Feed() {

    const [posts, setPosts] = useState([])
    // const [text, setText] = useState("")

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/60e224dcafeeb219480021e3")
            setPosts(res.data)
        }
        fetchPosts()
    }, [])

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
