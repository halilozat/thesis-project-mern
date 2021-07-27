import React from 'react'

export default function Conversation() {
    return (
        <>
            <li class="active">
                <div class="d-flex bd-highlight">
                    <div class="img_cont">
                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                        <span>Halil</span>
                        <p>Halil is online</p>
                    </div>
                </div>
            </li>

            <li>
                <div class="d-flex bd-highlight">
                    <div class="img_cont">
                        <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" class="rounded-circle user_img" />
                        <span class="online_icon offline"></span>
                    </div>
                    <div class="user_info">
                        <span>Melih Yörük</span>
                        <p>Melih left 50 mins ago</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="d-flex bd-highlight">
                    <div class="img_cont">
                        <img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg" class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                        <span>Mehmet Çakmaz</span>
                        <p>Mehmet is online</p>
                    </div>
                </div>
            </li>
        </>
    )
}
