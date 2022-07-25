import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Verify from "./pages/login/Verify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route exact path="/login">
        <Login/></Route>
        <Route exact path="/signup">
        <Register/></Route>
        <Route exact path="/profile">
        <Profile/></Route>
        <Route exact path="/verify">
        <Verify/></Route>
      </Switch>
    </Router>
  );
}

export default App;
