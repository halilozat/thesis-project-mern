/** Dependencies */
import { useState, useEffect, useContext } from "react"

/** Styles */
import "./feed.css"

/** Contexts */
import { AuthContext } from "../../../context/AuthContext"

/** Services */
import ThesisService from "../../../services/ThesisService"

/** Components */
import Serie from "../series/Serie"


const SerieFeed = ({ username }) => {

    const [series, setSeries] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchSeries = async () => {

            const res = await ThesisService.GetAllSeries()

            setSeries(
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
                        <Serie key={b._id} serie={b} />
                    ))}



                </div>


            </div>
        </div>
    )
}

export default SerieFeed
