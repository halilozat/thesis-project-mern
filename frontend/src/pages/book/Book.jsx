/** Dependencies */
import { useContext } from "react"
import { Row, Col } from 'react-bootstrap'

/** Contexts */
import ThemeContext from "../../context/ThemeContext"

/** Components */
import Sidebar from '../../components/MenuComponent/sidebar/Sidebar'
import Topbar from '../../components/MenuComponent/topbar/Topbar'
import RightBurger from "../../components/MenuComponent/rightbar/RightBurger"
import BookFeed from "../../components/BookComponent/bookFeed/BookFeed"


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
