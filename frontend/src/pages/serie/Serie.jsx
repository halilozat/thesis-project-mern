import React from 'react'
import './serie.css'
import ThemeContext from "../../context/ThemeContext"
import { useContext } from "react"
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import RightBurger from "../../components/rightbar/RightBurger"
import { Row, Col } from 'react-bootstrap'
import SerieFeed from '../../components/serieFeed/SerieFeed'


const Serie = () => {

    const { theme } = useContext(ThemeContext)


    return (
        <div>
            <div className={`theme ${theme}`}>
                <Topbar />
                <Row>
                    <Col xs={2} md={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={8} md={8}>
                        <SerieFeed />
                    </Col>
                    <Col xs={2} md={2}>
                        <RightBurger />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Serie
