import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Spaced Flashcards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            <Nav.Link eventKey="1" href="/decks">My Decks</Nav.Link>
            <Nav.Link eventKey="2" href="/search">Search Decks</Nav.Link>
          </Nav>
          <Nav variant="pills">
            <Nav.Link eventKey="3" href="/login">Login</Nav.Link>
            <Nav.Link eventKey="4" href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}