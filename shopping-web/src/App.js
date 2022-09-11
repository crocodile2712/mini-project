
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { useSelector} from "react-redux/es/exports";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Success from "./page/Success";
import RegSuccess from "./page/RegSuccess";


function App() {
  const wishList = useSelector(state =>state.wish.wishList)
  const cartList = useSelector(state =>state.cart.cartList)

  useEffect(()=>{
    localStorage.setItem("cartList",JSON.stringify(cartList))
  },[cartList])
  
  useEffect(()=>{
    localStorage.setItem("wishList",JSON.stringify(wishList))
  },[wishList])
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <PublicRoute />
        </Route>
        <Route exact path="/regsuccess">
          <RegSuccess/>
        </Route>
        <Route path="/">
          <PrivateRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
