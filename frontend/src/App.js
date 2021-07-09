import 'semantic-ui-css/semantic.min.css'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
