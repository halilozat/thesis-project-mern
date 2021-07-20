import 'semantic-ui-css/semantic.min.css'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const { user } = useContext(AuthContext)

  return (
    <div>

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
        <Route path="/profile/:username" component={Profile} />
      </Switch>

    </div>
  );
}

export default App;
