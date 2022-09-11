import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Home from "../pages/home/Home";
import NewProduct from "../pages/newProduct/NewProduct";
import NewUser from "../pages/newUser/NewUser";
import Product from "../pages/product/Product";
import ProductList from "../pages/productList/ProductList";
import User from "../pages/user/User";
import UserList from "../pages/userList/UserList";

export default function PrivateRoute() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return ( admin ?
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Route path="/newUser">
          <NewUser />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:productId">
          <Product />
        </Route>
        <Route path="/newproduct">
          <NewProduct />
        </Route>
      </div>
    </> :
    <Redirect to="/login"/>
  );
}
