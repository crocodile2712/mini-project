import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Cart from "../page/Cart";
import Home from "../page/Home";
import ProductList from "../page/ProductList";
import ProductPage from "../page/ProductPage";
import Success from "../page/Success";
import PublicRoute from "./PublicRoute";

export default function PrivateRoute() {
    return (
      <DefaultLayout>
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/product-list/:category">
            <ProductList />
          </Route>
          <Route exact path="/product-page/:id">
            <ProductPage />
          </Route>
          <Route exact path="/success">
            <Success/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </DefaultLayout>
    );
}
