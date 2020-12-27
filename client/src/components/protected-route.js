import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

/* TODO: this needs to refresh the jwt token */
export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  console.log(`isAuthenticated() is: ${isAuthenticated()}`);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
