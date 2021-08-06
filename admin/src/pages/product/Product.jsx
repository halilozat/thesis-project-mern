import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
    const location = useLocation();
    const post = location.post
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER


    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Post</h1>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={publicFolder + post.img} alt="" className="productInfoImg" />
                        <span className="productName">{post.desc}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue"> {post._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">userId:</span>
                            <span className="productInfoValue"> {post.userId}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft" style={{marginTop:"30px"}}>
                        <label>Post İçeriği</label>
                        <input type="text" placeholder={post.desc}/>                        
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={publicFolder + post.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton" style={{marginTop:"15px", marginRight:"15px"}}>Güncelle</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
