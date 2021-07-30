import './message.css'
import { format } from 'timeago.js'

export default function Message({ message, own }) {
    return (
        <div className={own ? "d-flex justify-content-end mb-4" : "d-flex justify-content-start mb-4"}>
            <div className={own ? "msg_cotainer_send" : "msg_cotainer"}>
                {message.text}
                <span class="msg_time">{format(message.createdAt)}</span>
            </div>
        </div>
    )
}
