import './weekly.css'

export default function Weekly() {
    return (
        <div className="weekly">
                    <h4 className="rightbarTitle">Haftanın Güzelleri</h4>
                    <div className="birthdayContainer">
                        <img className="birthdayImg" src="assets/filmm.jpg" alt="" />
                        <span className="birthdayText">
                            <span className="book">Haftanin Filmi </span>
                            <button className="secilen">Esaretin Bedeli</button>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="birthdayContainer">
                        <img className="birthdayImg" src="assets/dizi.png" alt="" />
                        <span className="birthdayText">
                            <span className="book">Haftanin Dizisi </span>
                            <button className="secilen">Loki</button>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="birthdayContainer">
                        <img className="birthdayImg" src="assets/book.png" alt="" />
                        <span className="birthdayText">
                            <span className="book">Haftanin Kitabi </span>
                            <button className="secilen">Suç ve Ceza</button>
                        </span>
                    </div>
                </div>
    )
}
