import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";

export default function PublicRoute() {
  const authUser = useSelector((state) => state.auth.authUser);

  if (authUser) {
    return <Redirect to={"/"} />;
  }

  return (
    <Switch>
      <Route exact path="/auth/login">
        <Login />
      </Route>
      <Route exact path="/auth/register">
        <Register />
      </Route>     
    </Switch>
  );
}
