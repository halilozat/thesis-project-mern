import "./home.css"
import Navbar from "../../components/burgerMenu/Navbar"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import RightBurger from "../../components/rightbar/RightBurger"
import { Row, Col } from 'react-bootstrap'
import ThemeContext from "../../context/ThemeContext"
import { useContext } from "react"

export default function Home() {
    const { theme, setTheme } = useContext(ThemeContext)



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

