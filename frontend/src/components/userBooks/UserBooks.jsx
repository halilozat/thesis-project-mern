import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import UserBookList from '../userBookList/UserBookList'
import './userbooks.css'

const UserBooks = () => {


    const [books, setBooks] = useState([])
    const { user } = useContext(AuthContext)



    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get("books/myBooks/" + user.username)
            setBooks(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
        };
        fetchBooks();
    }, [user.username]);



    return (
        <>

            <h1 className="userBookTitle anarchy block">
                OKUDUĞUM KİTAPLAR
                <br />
                <h3>({books.length} Kitap)</h3>
            </h1>


            <ul className="ulList">

                {books.map((b) => (
                    
                    <UserBookList key={b._id} book={b} />
                ))}

                {/* <Post key={b._id} book={b} /> */}






                {/* <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="" /></li>
                <li className="liList"><img className="imgList" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="" /></li> */}
            </ul>
        </>
    )
}

export default UserBooks
