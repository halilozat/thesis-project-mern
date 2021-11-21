/** Dependencies */
import { useContext } from "react"
import { Row, Col } from 'react-bootstrap'

/** Components */
import Topbar from "../../components/MenuComponent/topbar/Topbar"
import Sidebar from "../../components/MenuComponent/sidebar/Sidebar"
import Feed from "../../components/PostComponent/feed/Feed"
import RightBurger from "../../components/MenuComponent/rightbar/RightBurger"

/** Contexts */
import ThemeContext from "../../context/ThemeContext"


/** Styles */
import "./home.css"


export default function Home() {
    const { theme } = useContext(ThemeContext)



    return (
        <div className={`theme ${theme}`}>
            <Topbar />
            <Row>
                <Col xs={2} md={2}>
                    <Sidebar />
                </Col>
                <Col xs={8} md={8}>
                    <Feed />
                </Col>
                <Col xs={2} md={2}>
                    <RightBurger />
                </Col>
            </Row>
        </div>
    )
}

