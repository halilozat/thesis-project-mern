/** Dependencies */
import { Row, Col } from 'react-bootstrap'
import { useContext } from "react"


/** Components */
import Sidebar from '../../components/MenuComponent/sidebar/Sidebar'
import Topbar from '../../components/MenuComponent/topbar/Topbar'
import RightBurger from "../../components/MenuComponent/rightbar/RightBurger"
import SerieFeed from '../../components/SerieComponent/serieFeed/SerieFeed'

/** Contexts */
import ThemeContext from "../../context/ThemeContext"

/** Styles */
import './serie.css'


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
