/** Dependencies */
import { useContext } from "react"
import { Row, Col } from 'react-bootstrap'

/** Contexts */
import ThemeContext from "../../context/ThemeContext"

/** Components */
import Topbar from "../../components/MenuComponent/topbar/Topbar"
import Sidebar from "../../components/MenuComponent/sidebar/Sidebar"
import UsersBooks from "../../components/BookComponent/userBooks/UserBooks"

/** Styles */
import './userbooks.css'


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
