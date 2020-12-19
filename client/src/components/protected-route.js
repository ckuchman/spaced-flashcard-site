import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authService } from "./auth-service";
import jwt_decode from "jwt-decode";
import { fetchCall } from "./helpers";

/* TODO: this needs to refresh the jwt token */
const PrivateRoute = (props) => {
  const authenticated =
    !localStorage.getItem("currentUser") || !authService.currentUserValue
      ? false
      : !(
          new Date(
            1000 * jwt_decode(authService.currentUserValue.refresh).exp
          ) > new Date()
        )
      ? false
      : true;
  if (!authenticated) {
    console.log("trying to log this guy out");
    authService.logout();
    return <Redirect to="/login" />;
  }
  /* refresh the token */
  /* get the localstorage data */
  let payload = {
    url: process.env.REACT_APP_BASE_URL + "auth/jwt/refresh/",
    method: "POST",
    auth: false,
    body: {
      refresh: authService.currentUserValue.refresh,
    },
  };
  fetchCall(payload).then((response) => {
    let local = JSON.parse(localStorage.getItem("currentUser"));
    local.access = response.access;
    localStorage.setItem("currentUser", JSON.stringify(local));
  });

  return authenticated ? (
    <Route path={props.path} exact={props.exact}>
      <props.component {...props} />
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
