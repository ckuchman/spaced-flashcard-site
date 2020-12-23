import React, { useEffect, useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import LandingPage from "./components/landing";
import NavBar from "./components/navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Register from "./components/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login";
import PrivateRoute from "./components/protected-route";
import Profile from "./components/profile";
import RunDeck from "./components/run-deck";
import CreateCard from "./components/create-card";
import AddDeck from "./components/add-deck";
import { authService } from "./components/auth-service";
import Create from "./components/create";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [validUser, setValidUser] = useState(false);

  console.log(`the base url is: ${process.env.REACT_APP_BASE_URL}`);

  useEffect(() => {
    const subscription = authService.currentUser.subscribe((user) =>
      setCurrentUser(user)
    );
    setValidUser(authService.isAuthenticated());
    return () => {
      subscription.unsubscribe();
    };
  }, [currentUser, validUser]);

  let authProps = {
    currentUser: currentUser,
    isAuthenticated: authService.isAuthenticated,
    logoutHelper: authService.logout,
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        style={{ marginTop: "25px" }}
      />
      <Router>
        <NavBar {...authProps} />
        <Container
          className="center"
          fluid="md"
          style={{ textAlign: "center", marginTop: "10%" }}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={(props) =>
                currentUser?.access && authService.isAuthenticated() ? (
                  <Redirect to="/profile" />
                ) : (
                  <LandingPage {...props} />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={(props) =>
                currentUser?.access && authService.isAuthenticated() ? (
                  <Redirect to="/profile" />
                ) : (
                  <Register {...props} />
                )
              }
            />
            <Route
              exact
              path="/login"
              render={(props) =>
                currentUser?.access && authService.isAuthenticated() ? (
                  <Redirect to="/profile" />
                ) : (
                  <Login {...props} />
                )
              }
            />
            <PrivateRoute
              exact
              path="/rundeck/:user_deck_id"
              component={RunDeck}
              {...authProps}
            />
            <PrivateRoute
              exact
              path="/profile"
              component={Profile}
              {...authProps}
            />
            <PrivateRoute
              exact
              path="/create"
              component={Create}
              {...authProps}
            />
            <PrivateRoute
              exact
              path="/createcard"
              component={CreateCard}
              {...authProps}
            />
            <PrivateRoute
              exact
              path="/createdeck"
              component={AddDeck}
              {...authProps}
            />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
