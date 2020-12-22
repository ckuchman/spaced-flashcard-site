import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import LandingPage from "./components/landing";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login";
import PrivateRoute from "./components/protected-route";
import Profile from "./components/profile";
import RunDeck from "./components/run-deck";
import CreateCard from "./components/create-card";
import AddDeck from "./components/add-deck";

function App() {
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
        <NavBar />
        <Container
          className="center"
          fluid="md"
          style={{ textAlign: "center", marginTop: "10%" }}
        >
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/rundeck" component={RunDeck} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/createcard" component={CreateCard} />
            <PrivateRoute exact path="/createdeck" component={AddDeck} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
