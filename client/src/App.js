import React from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import LandingPage from "./components/landing";
import NavBar from "./components/navbar";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/register";

function App() {
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <>
      <SnackbarProvider
        style={{ marginTop: 75 }}
        maxSnack={1}
        autoHideDuration={3000}
        ref={notistackRef}
        action={(key) => (
          <Button style={{ color: "white" }} onClick={onClickDismiss(key)}>
            Dismiss
          </Button>
        )}
      >
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

            </Switch>
          </Container>
        </Router>
      </SnackbarProvider>
    </>
  );
}

export default App;
