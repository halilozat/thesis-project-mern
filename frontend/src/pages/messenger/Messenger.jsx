import axios from 'axios'
import React, { useContext, useState, useEffect, useRef } from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/messages/Message'
import Topbar from '../../components/topbar/Topbar'
import { AuthContext } from '../../context/AuthContext'
import { io } from "socket.io-client";
import './messenger.css'

export default function Messenger() {

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const { user } = useContext(AuthContext)
    const scrollRef = useRef();
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900")
    }, [])


    useEffect(() => {
        socket.current.emit("addUser", user._id)
        socket.current.on("getUsers", users)
    }, [user]);


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


    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        }

        try {
            const res = await axios.post("/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    }

    //scrollbar default down function
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    return (
        <div className="background">
            <Topbar />
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-md-4 col-xl-3 chat">
                        <div className="card mb-sm-3 mb-md-0 contacts_card">

                            {/* Searh Bar */}
                            <div className="card-header">
                                <div className="input-group">
                                    <input type="text" placeholder="Search..." name="" className="form-control search" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body contacts_body">
                                <ui className="contacts">
                                    {
                                        conversations.map(c => (
                                            <div onClick={() => setCurrentChat(c)}>
                                                <Conversation conversation={c} currentUser={user} />
                                            </div>
                                        ))
                                    }
                                </ui>
                            </div>

                            <div className="card-footer"></div>
                        </div></div>

                    <div className="col-md-8 col-xl-6 chat">
                        <div className="card">
                            {
                                currentChat ?
                                    <>
                                        <div className="card-header msg_head">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img" />
                                                    {/* <span className="online_icon"></span> */}
                                                </div>
                                                <div className="user_info">
                                                    <span>Chat with Melih</span>
                                                </div>
                                                <div className="video_cam">
                                                    <span><i className="fas fa-video"></i></span>
                                                    <span><i className="fas fa-phone"></i></span>
                                                </div>
                                            </div>
                                            <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                                            <div className="action_menu">
                                                <ul>
                                                    <li><i className="fas fa-user-circle"></i> View profile</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body msg_card_body">
                                            {
                                                messages.map(m => (
                                                    <div ref={scrollRef}>
                                                        <Message message={m} own={m.sender === user._id} />
                                                    </div>
                                                ))
                                            }



                                        </div>
                                        <div className="card-footer">
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                                                </div>
                                                <textarea
                                                    name=""
                                                    className="form-control type_msg"
                                                    placeholder="Bir mesaj yazın..."
                                                    onChange={(e) => setNewMessage(e.target.value)}
                                                    value={newMessage}
                                                >
                                                </textarea>
                                                <div className="input-group-append">
                                                    <span className="input-group-text send_btn"><i className="fas fa-location-arrow" onClick={handleSubmit}></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    : <span className="noConversationText">Open a conversation to start a chat</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
