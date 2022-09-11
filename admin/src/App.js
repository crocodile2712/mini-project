import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import {useSelector} from "react-redux"
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  console.log("ad",admin)
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
          </Route>
        <Route path="/">
          <PrivateRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
