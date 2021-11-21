import React, { useContext, useState, useEffect, useRef } from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/messages/Message'
import Topbar from '../../components/MenuComponent/topbar/Topbar'
import { AuthContext } from '../../context/AuthContext'
import { io } from "socket.io-client";
import ChatOnline from '../../components/chatOnline/ChatOnline'
import './messenger.css'
import ThesisService from '../../services/ThesisService'

export default function Messenger() {

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const { user } = useContext(AuthContext)
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(
                user.followings.filter((f) => users.some((u) => u.userId === f))
            );
        });
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await ThesisService.GetConversations(user._id);
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
                const res = await ThesisService.GetMessages(currentChat?._id);
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
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await ThesisService.AddMessages(message)
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    return (
        <div className="background">
            <Topbar />
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    {/* messenger leftbar */}
                    <div className="col-md-4 col-xl-3 chat">
                        <div className="card mb-sm-3 mb-md-0 contacts_card">

                            {/* leftbar searhbar */}
                            <div className="card-header">
                                <div className="input-group">
                                    <input type="text" placeholder="Search..." name="" className="form-control search" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                                    </div>
                                </div>
                            </div>

                            {/* leftbar body */}
                            <div className="card-body contacts_body">
                                <ul className="contacts">
                                    {
                                        conversations.map(c => (
                                            <div
                                                key={c._id}
                                                onClick={() => setCurrentChat(c)}
                                            >
                                                <Conversation
                                                    conversation={c}
                                                    currentUser={user}
                                                    onlineUsers={onlineUsers}
                                                    currentId={user._id}
                                                    setCurrentChat={setCurrentChat}
                                                />
                                            </div>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* leftbar footer */}
                            <div className="card-footer">

                            </div>

                        </div>
                    </div>

                    {/* messenger main screen */}
                    <div className="col-md-8 col-xl-6 chat">
                        <div className="card">
                            {
                                currentChat ?
                                    <>
                                        {/* chat header */}
                                        <div className="card-header msg_head">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img" alt=""/>
                                                    {/* <span className="online_icon"></span> */}
                                                </div>
                                                <div className="user_info">
                                                    <span>Chat with ...</span>
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

                                        {/* chat body */}
                                        <div className="card-body msg_card_body">
                                            {
                                                messages.map(m => (
                                                    <div
                                                        key={m._id}
                                                        ref={scrollRef}>
                                                        <Message
                                                            message={m}
                                                            own={m.sender === user._id}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        {/* chat footer */}
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
                                    : <span className="noConversationText">Sohbet başlatmak için bir kişi seçin.</span>
                            }
                        </div>
                    </div>

                    {/* messenger online field */}
                    <div className="col-md-4 col-xl-2 chat">
                        <div className="card mb-sm-3 mb-md-0 contacts_card">
                            {/* messenger online header*/}
                            <div className="card-header msg_head">
                                <div className="d-flex bd-highlight">
                                    <div className="user_info">
                                        <span>Online</span>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            {/* messenger online body */}
                            <div className="card-body contacts_body">
                                <ul className="contacts">
                                    <ChatOnline
                                        onlineUsers={onlineUsers}
                                        currentId={user._id}
                                        setCurrentChat={setCurrentChat}
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
