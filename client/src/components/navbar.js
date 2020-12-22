import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useLocation } from "react-router";
import { authService } from "./auth-service";
import {useHistory} from 'react-router-dom';

export default function NavBar() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const subscription = authService.currentUser.subscribe((user) =>
      setCurrentUser(user)
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [currentUser]);

  function logoutHelper() {
    authService.logout();
    history.push("/");

  }

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
          </Nav>
          {!currentUser ? (
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
              <p>{`welcome back, ${currentUser.userData.username}`}</p>
              <Button onClick={logoutHelper}>Logout!</Button>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
