import 'semantic-ui-css/semantic.min.css'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  Switch,
  Route,
  Router
} from "react-router-dom";


function App() {
  return (
    <div>
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile:username" component={Profile} />
      </Switch>
    
    </div>
  );
}

export default App;
