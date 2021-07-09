import Post from "../post/Post"
import Share from "../share/Share"
import { Posts } from "../../dummyData";
import "./feed.css"

export default function Feed() {
    return (
        <div>
            <div className="feed">
                <div className="feedWrapper">
                    <Share />
                    {Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))}
                </div>
            </div>
        </div>
    )
}
