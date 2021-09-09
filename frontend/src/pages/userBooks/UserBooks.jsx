import React from 'react'
import './userbooks.css'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import UsersBooks from "../../components/userBooks/UserBooks"
import { Row, Col } from 'react-bootstrap'
import ThemeContext from "../../context/ThemeContext"
import { useContext } from "react"

const UserBooks = () => {

    const { theme } = useContext(ThemeContext)


    return (

        <div className={`theme ${theme}`}>
            <Topbar />
            <Row>
                <Col xs={2} md={2}>
                    <Sidebar />
                </Col>
                <Col xs={10} md={10}>
                    <UsersBooks />
                </Col>
            </Row>
        </div>
    )
}

export default UserBooks
