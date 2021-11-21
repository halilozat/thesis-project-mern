/** Dependencies */
import { useState, useEffect, useContext } from "react"

/** Styles */
import "./feed.css"

/** Components */
import Movie from "../../MovieComponent/movies/Movie"

/** Contexts */
import { AuthContext } from "../../../context/AuthContext"

/** Services */
import ThesisService from "../../../services/ThesisService"


export default function Feed({ username }) {

  const [movies, setMovies] = useState([])
  const { user } = useContext(AuthContext)



  useEffect(() => {
    const fetchMovies = async () => {

      const res = await ThesisService.GetAllMovies()
      console.log(res)
       setMovies(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchMovies();
  }, [username, user._id]);

  return (
    <div>
      <div className="feed">
        <div className="feedWrapper">

          {movies.map((b) => (
            <Movie key={b._id} movie={b} />
          ))}



        </div>


      </div>
    </div>
  )
}
