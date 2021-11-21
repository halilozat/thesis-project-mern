/** Dependencies */
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useContext } from "react"

/** Styles */
import './movie.css'

/** Contexts */
import ThemeContext from "../../context/ThemeContext"

/** Components */
import Sidebar from '../../components/MenuComponent/sidebar/Sidebar'
import Topbar from '../../components/MenuComponent/topbar/Topbar'
import RightBurger from "../../components/MenuComponent/rightbar/RightBurger"
import MovieFeed from "../../components/movieFeed/MovieFeed"


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
