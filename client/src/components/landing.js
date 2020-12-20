import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";

function LandingPage() {
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
          marginTop: "20%",
        }}
      >
        <head>
          <title>Spaced Flashcards Project - OSU Winter Hackathon 2020</title>
        </head>
        <h1>Spaced Flashcards</h1>

        <Card
          style={{
            width: "50%",
            flex: "1",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Card.Body>
            <Card.Title>A Proven System</Card.Title>
            <Card.Text>
              Research shows that spaced repetition is an extremely effective
              strategy for memory retention and learning. What topic would you
              like to know more completely?
            </Card.Text>
            <Button
              onClick={handleLogin}
              style={{ marginRight: "25px" }}
              variant="primary"
            >
              Login
            </Button>
            <Button onClick={handleRegister} variant="primary">
              Register in Seconds
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default LandingPage;
