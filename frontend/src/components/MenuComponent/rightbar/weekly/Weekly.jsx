import './weekly.css'
import { Movie, Theaters, MenuBook } from "@material-ui/icons";

export default function Weekly() {
    return (
        <div className="weekly">
            <h4 className="rightbarTitle">Haftanın Güzelleri</h4>
            <hr/>
            <div className="birthdayContainer">
                <Movie fontSize="large" className="sidebarIcon" />
                <span className="birthdayText">
                    <h3 className="book">Haftanın Filmi </h3>
                    <button className="secilen">Esaretin Bedeli</button>
                </span>
            </div>
            <br className="sidebarHr" />
            <div className="birthdayContainer">
                <Theaters fontSize="large" className="sidebarIcon" />
                <span className="birthdayText">
                    <h3 className="book">Haftanın Dizisi </h3>
                    <button className="secilen">Friends</button>
                </span>
            </div>
            <br className="sidebarHr" />
            <div className="birthdayContainer">
                <MenuBook fontSize="large" className="sidebarIcon" />
                <span className="birthdayText">
                    <h3 className="book">Haftanın Kitabı </h3>
                    <button className="secilen">Suç ve Ceza</button>
                </span>
            </div>
        </div>
    )
}
