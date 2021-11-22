
import { Movie, Theaters, MenuBook } from "@material-ui/icons";
import './weekly.scss'

export default function Weekly() {
    return (
        <div className="weekly">
            <h4 className="weeklyTitle">Haftanın Güzelleri</h4>
            <hr/>
            <div className="weeklyContainer">
                <span className="weeklyText">
                    <Movie />
                    <h1 className="secilen">Esaretin Bedeli</h1>
                </span>
            </div>
            <br className="sidebarHr" />
            <div className="weeklyContainer">
                <span className="weeklyText">
                    <Theaters />
                    <h1 className="secilen">Friends</h1>
                </span>
            </div>
            <br className="sidebarHr" />
            <div className="weeklyContainer">
                <span className="weeklyText">
                    <MenuBook />
                    <h1 className="secilen">Suç ve Ceza</h1>
                </span>
            </div>
        </div>
    )
}
