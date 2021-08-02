import './categories.css'

export default function Categories() {
    return (
        <div className="weekly">
                    <h4 className="rightbarTitle">Kategoriler</h4>
                    <div className="birthdayContainer">
                        <span className="birthdayText">
                            <button className="secilen">Kitaplar</button>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="birthdayContainer">
                        <span className="birthdayText">
                            <button className="secilen">Filmler</button>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="birthdayContainer">
                        <span className="birthdayText">
                            <button className="secilen">Diziler</button>
                        </span>
                    </div>
                </div>
    )
}
