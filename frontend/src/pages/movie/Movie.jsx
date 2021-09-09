import React from 'react'
import './movie.css'
import ThemeContext from "../../context/ThemeContext"
import { useContext } from "react"
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import RightBurger from "../../components/rightbar/RightBurger"
import MovieFeed from "../../components/movieFeed/MovieFeed"
import { Row, Col } from 'react-bootstrap'

const Movie = () => {

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
                        <MovieFeed />
                    </Col>
                    <Col xs={2} md={2}>
                        <RightBurger />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Movie
