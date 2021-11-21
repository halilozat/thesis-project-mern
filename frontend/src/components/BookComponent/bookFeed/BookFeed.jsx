/** Dependencies */
import { useState, useEffect, useContext } from "react"

/** Components */
import Book from '../books/Book'

/** Contexts */
import { AuthContext } from "../../../context/AuthContext"

/** Services */
import ThesisService from "../../../services/ThesisService"

/** Styles */
import "./feed.css"

export default function Feed({ username }) {

  const [books, setBooks] = useState([])
  const { user } = useContext(AuthContext)



  useEffect(() => {
    const fetchBooks = async () => {

      const res =
       await ThesisService.GetAllBooks()

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

          {books.map((b) => (
            <Book key={b._id} book={b} />
          ))}



        </div>


      </div>
    </div>
  )
}
