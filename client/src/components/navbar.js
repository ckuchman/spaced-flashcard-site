import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function NavBar(props) {
  const history = useHistory();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/profile">Spaced Flashcards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            <Nav.Link eventKey="1" href="/profile">
              My Decks
            </Nav.Link>
            <Nav.Link eventKey="2" href="/create">
              Create
            </Nav.Link>
          </Nav>
          {!props.currentUser || !props.isAuthenticated() ? (
            <Nav variant="pills">
              <Nav.Link eventKey="3" href="/login">
                Login
              </Nav.Link>
              <Nav.Link eventKey="4" href="/register">
                Register
              </Nav.Link>
            </Nav>
          ) : (
            <>
              <p>{`welcome back, ${props.currentUser.userData.username}`}</p>
              <Button
                onClick={() => {
                  props.logoutHelper();
                  history.push("/");
                }}
              >
                Logout!
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
