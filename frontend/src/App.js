import 'semantic-ui-css/semantic.min.css'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from './pages/messenger/Messenger';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import book from './components/books/Book';
import bookDetail from './components/bookDetail/BookDetail';
import Note from './pages/note/Note';


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
            <Route path="/book" component={book} />
            <Route path="/bookDetail" component={bookDetail} />
            <Route path="/myNotes" component={Note} />
          </Switch>

        </Router>

      </div>
  );
}

export default App;
