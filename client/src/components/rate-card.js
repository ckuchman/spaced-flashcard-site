import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function RateCard(props) {
  function handleClick(rating) {
    props.handleRate(rating);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button
              variant="success"
              onClick={() => {
                handleClick("easy");
              }}
            >
              Easy - 7 Days
            </Button>
          </Col>

          <Col>
            <Button
              variant="warning"
              onClick={() => {
                handleClick("medium");
              }}
            >
              Medium - 7 Hours
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              onClick={() => {
                handleClick("hard");
              }}
            >
              Hard -  7 Minutes
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
