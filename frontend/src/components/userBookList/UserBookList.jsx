import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './userbooks.css'

const UserBookList = ({ book }) => {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${book.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [book.userId])

    return (
        <>
            <li className="liList">
                <img
                    className="imgList"
                    src={publicFolder + book.img}
                    alt=""
                />
            </li>
        </>
    )
}

export default UserBookList
