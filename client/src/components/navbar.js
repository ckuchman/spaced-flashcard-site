import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function NavBar(props) {
  const history = useHistory();

  return (
    <>
      <Navbar bg="dark" expand="md">
        <Navbar.Brand href="/profile" style={{ color: "whitesmoke" }}>
          Spaced Flashcards
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            <Nav.Link
              eventKey="1"
              style={{ color: "whitesmoke" }}
              href="/create"
            >
              Create
            </Nav.Link>
          </Nav>
          {!props.currentUser || !props.isAuthenticated() ? (
            <Nav variant="pills">
              <Nav.Link
                eventKey="2"
                href="/login"
                style={{ color: "whitesmoke" }}
              >
                Login
              </Nav.Link>
              <Nav.Link
                eventKey="3"
                style={{ color: "whitesmoke" }}
                href="/register"
              >
                Register
              </Nav.Link>
            </Nav>
          ) : (
            <>
              <Nav.Item style={{ marginRight: "5%", color: "whitesmoke" }}>
                <>{`welcome back, ${
                  props.currentUser.userData.username.split("@")[0]
                }`}</>
              </Nav.Item>
              <Nav.Item>
                <Button
                  variant="light"
                  onClick={() => {
                    props.logoutHelper();
                    history.push("/");
                  }}
                >
                  Logout!
                </Button>
              </Nav.Item>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
