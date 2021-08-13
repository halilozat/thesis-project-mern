import './weekly.css'
import { Movie, Theaters, MenuBook } from "@material-ui/icons";

export default function Weekly() {
    return (
        <div className="weekly">
            <h4 className="rightbarTitle">Haftanın Güzelleri</h4>
            <div className="birthdayContainer">
                <Movie fontSize="large" className="sidebarIcon" />
                <span className="birthdayText">
                    <span className="book">Haftanin Filmi </span>
                    <button className="secilen">Esaretin Bedeli</button>
                </span>
            </div>
            <br className="sidebarHr" />
            <div className="birthdayContainer">
                <Theaters fontSize="large" className="sidebarIcon" />
                <span className="birthdayText">
                    <span className="book">Haftanin Dizisi </span>
                    <button className="secilen">Loki</button>
                </span>
            </div>
            <br className="sidebarHr" />
            <div className="birthdayContainer">
                <MenuBook fontSize="large" className="sidebarIcon" />
                <span className="birthdayText">
                    <span className="book">Haftanin Kitabi </span>
                    <button className="secilen">Suç ve Ceza</button>
                </span>
            </div>
        </div>
    )
}
