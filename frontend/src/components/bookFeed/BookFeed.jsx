import { useState, useEffect, useContext } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import Book from '../books/Book'
import "./feed.css"
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext"

export default function Feed({ username }) {

  const [books, setBooks] = useState([])
  const { user } = useContext(AuthContext)



  useEffect(() => {
    const fetchBooks = async () => {

      const res = await axios.get("/books/allbooks/getall")

      setBooks(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchBooks();
  }, [username, user._id]);

  return (
    <div>
      <div className="feed">
        <div className="feedWrapper">

          {/* <Share /> */}
          {/* <Book /> */}

          {books.map((b) => (
            <Book key={b._id} book={b} />
          ))}



        </div>


      </div>
    </div>
  )
}
