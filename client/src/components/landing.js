import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Container, Button, Row } from "react-bootstrap";

function LandingPage(props) {
  const history = useHistory();

  function handleRegister() {
    history.push("/register");
    return;
  }

  function handleLogin() {
    history.push("/login");
    return;
  }

  return (
    <>
      <Container
        className="center"
        fluid="md"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <h1 style={{ marginBottom: "10%", fontFamily: "'Frijole', cursive" }}>
          Spaced Flashcards
        </h1>
        <Card
          style={{
            flex: "1",
            backgroundColor: "lightgray",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontFamily: "'Lalezar', cursive" }}>
              A Proven System
            </Card.Title>
            <Card.Text>
              Research shows that spaced repetition is an extremely effective
              strategy for memory retention and learning. What topic would you
              like to know more completely?
            </Card.Text>
            <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button onClick={handleLogin} variant="primary">
                Login
              </Button>
              <Button onClick={handleRegister} variant="primary">
                Register in Seconds
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default LandingPage;
