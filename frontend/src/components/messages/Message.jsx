import './message.css'

export default function Message({ own }) {
    return (
            <div className={own ? "d-flex justify-content-end mb-4" : "d-flex justify-content-start mb-4"}>
                
                {/* <div class="img_cont_msg">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg" />
                </div> */}
                <div className={own ? "msg_cotainer_send" : "msg_cotainer"}>
                    Hi! How are you?
                    <span class="msg_time">8:40 AM, Today</span>
                </div>
            </div>

    )
}
