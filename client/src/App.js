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
      />
      <Router>
        <NavBar
          currentUser={currentUser}
          isAuthenticated={authService.isAuthenticated}
          logoutHelper={authService.logout}
        />
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
                currentUser &&
                  currentUser.access &&
                  authService.isAuthenticated() ? (
                    <Redirect to="/profile" />
                  ) : (
                    <LandingPage
                      {...props}
                      currentUser={currentUser}
                      isAuthenticated={authService.isAuthenticated}
                    />
                  )
              }
            />
            <Route
              exact
              path="/register"
              render={(props) =>
                currentUser &&
                  currentUser.access &&
                  authService.isAuthenticated() ? (
                    <Redirect to="/profile" />
                  ) : (
                    <Register {...props} currentUser={currentUser} />
                  )
              }
            />
            <Route
              exact
              path="/login"
              render={(props) =>
                currentUser &&
                  currentUser.access &&
                  authService.isAuthenticated() ? (
                    <Redirect to="/profile" />
                  ) : (
                    <Login {...props} currentUser={currentUser} />
                  )
              }
            />
            <PrivateRoute
              exact
              path="/rundeck"
              component={RunDeck}
              isAuthenticated={authService.isAuthenticated}
              currentUser={currentUser}
            />
            <PrivateRoute
              exact
              path="/profile"
              component={Profile}
              isAuthenticated={authService.isAuthenticated}
              currentUser={currentUser}
            />
            <PrivateRoute
              exact
              path="/createcard"
              component={CreateCard}
              isAuthenticated={authService.isAuthenticated}
              currentUser={currentUser}
            />
            <PrivateRoute
              exact
              path="/createdeck"
              component={AddDeck}
              isAuthenticated={authService.isAuthenticated}
              currentUser={currentUser}
            />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
