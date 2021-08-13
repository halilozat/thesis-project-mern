import "./home.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
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
                <Col xs={7} md={7}>
                    <Feed />
                </Col>
                <Col xs={3} md={3}>
                    <Rightbar />
                </Col>
            </Row>



        </div>
    )
}

