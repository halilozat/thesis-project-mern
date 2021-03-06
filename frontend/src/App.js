/** Dependencies */
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from 'react';

/** Pages */
import Home from "./pages/home/Home";
import Book from './pages/book/Book'
import Note from './pages/note/Note';
import Login from "./pages/login/Login";
import Movie from './pages/movie/Movie';
import Serie from './pages/serie/Serie';
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from './pages/messenger/Messenger';
import UserBooks from './pages/userBooks/UserBooks';

/** Components */
import bookDetail from './components/BookComponent/bookDetail/BookDetail';

/** Contexts */
import { AuthContext } from './context/AuthContext';


function App() {

  const { user } = useContext(AuthContext)

  return (
      <div>

        <Router>

          <Switch>
            <Route path="/" exact >
              {user ? <Home /> : <Register />}
            </Route>
            <Route path="/login">
              {user
                ? <Redirect to="/" />
                : <Login />
              }
            </Route>
            <Route path="/register">
              {user
                ? <Redirect to="/" />
                : <Register />
              }
            </Route>
            <Route path="/messenger">
              {!user
                ? <Redirect to="/" />
                : <Messenger />
              }
            </Route>
            <Route path="/profile/:username" component={Profile} />
            <Route path="/books" component={Book} />
            <Route path="/myBooks/:username" component={UserBooks} />
            <Route path="/movies" component={Movie} />
            <Route path="/series" component={Serie} />
            <Route path="/bookDetail" component={bookDetail} />
            <Route path="/myNotes" component={Note} />
          </Switch>

        </Router>

      </div>
  );
}

export default App;
