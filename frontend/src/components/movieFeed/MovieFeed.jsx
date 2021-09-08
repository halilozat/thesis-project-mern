import { useState, useEffect, useContext } from "react"
import Book from '../books/Book'
import "./feed.css"
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext"

export default function Feed({ username }) {

  const [movies, setMovies] = useState([])
  const { user } = useContext(AuthContext)



  useEffect(() => {
    const fetchMovies = async () => {

      const res =
       await axios.get("/movies/allmovies/getall")

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
