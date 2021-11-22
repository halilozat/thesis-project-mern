/** Styles */
import './categories.scss'

export default function Categories() {
    return (
        <div className="categories">
                    <h4 className="categoryTitle">Kategoriler</h4>
                    <hr />
                    <div className="categoryContainer">
                        <span className="categoryText">
                            <h1 className="category">Kitaplar</h1>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="categoryContainer">
                        <span className="categoryText">
                            <h1 className="category">Filmler</h1>
                        </span>
                    </div>
                    <br className="sidebarHr" />
                    <div className="categoryContainer">
                        <span className="categoryText">
                            <h1 className="category">Diziler</h1>
                        </span>
                    </div>
                </div>
    )
}
