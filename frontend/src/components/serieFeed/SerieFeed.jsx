import { useState, useEffect, useContext } from "react"
import "./feed.css"
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext"
import Movie from "../movies/Movie"


const SerieFeed = () => {

    const [series, setSeries] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchSeries = async () => {

            const res =
                await axios.get("/series/allseries/getall")

            setMovies(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
        };
        fetchSeries();
    }, [username, user._id]);


    return (
        <div>
            <div className="feed">
                <div className="feedWrapper">

                    {series.map((b) => (
                        <Movie key={b._id} serie={b} />
                    ))}



                </div>


            </div>
        </div>
    )
}

export default SerieFeed
