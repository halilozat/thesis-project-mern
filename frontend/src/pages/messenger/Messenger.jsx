import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/messages/Message'
import Topbar from '../../components/topbar/Topbar'
import { AuthContext } from '../../context/AuthContext'
import './messenger.css'

export default function Messenger() {

    const [conversations, setConversations] = useState([]);

    const { user } = useContext(AuthContext)


    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);




    return (
        <div className="background">
            <Topbar />
            <div class="container-fluid h-100">
                <div class="row justify-content-center h-100">

                    <div class="col-md-4 col-xl-3 chat">
                        <div class="card mb-sm-3 mb-md-0 contacts_card">

                            {/* Searh Bar */}
                            <div class="card-header">
                                <div class="input-group">
                                    <input type="text" placeholder="Search..." name="" class="form-control search" />
                                    <div class="input-group-prepend">
                                        <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body contacts_body">
                                <ui class="contacts">
                                    {
                                        conversations.map(c => (
                                            <Conversation conversation={c} currentUser={user}/>
                                        ))
                                    }
                                </ui>
                            </div>

                            <div class="card-footer"></div>
                        </div></div>

                    <div class="col-md-8 col-xl-6 chat">
                        <div class="card">
                            <div class="card-header msg_head">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" class="rounded-circle user_img" />
                                        {/* <span class="online_icon"></span> */}
                                    </div>
                                    <div class="user_info">
                                        <span>Chat with Melih</span>
                                    </div>
                                    <div class="video_cam">
                                        <span><i class="fas fa-video"></i></span>
                                        <span><i class="fas fa-phone"></i></span>
                                    </div>
                                </div>
                                <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                                <div class="action_menu">
                                    <ul>
                                        <li><i class="fas fa-user-circle"></i> View profile</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body msg_card_body">


                                <Message own={true} />


                            </div>
                            <div class="card-footer">
                                <div class="input-group">
                                    <div class="input-group-append">
                                        <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                                    </div>
                                    <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                                    <div class="input-group-append">
                                        <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
