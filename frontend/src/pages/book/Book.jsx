import React from 'react'
import ThemeContext from "../../context/ThemeContext"
import { useContext } from "react"
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import RightBurger from "../../components/rightbar/RightBurger"
import BookFeed from "../../components/bookFeed/BookFeed"
import { Row, Col } from 'react-bootstrap'


const Book = () => {

    const { theme } = useContext(ThemeContext)


    return (
        <div className={`theme ${theme}`}>
            <Topbar />
            <Row>
                <Col xs={2} md={2}>
                    <Sidebar />
                </Col>
                <Col xs={8} md={8}>
                    <BookFeed />
                </Col>
                <Col xs={2} md={2}>
                    <RightBurger />
                </Col>
            </Row>
        </div>
    )
}

export default Book
