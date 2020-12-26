import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function RateCard(props) {
  /* based on which button was clicked, add the appropriate amount of time for
   * next display of card */
  function handleClick(rating) {
    let currentDate = new Date();
    let newDate = new Date(
      currentDate.getTime() +
        7 *
          (rating === "easy" ? 86400000 : rating === "medium" ? 3600000 : 60000)
    );
    props.handleRate(newDate);
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
              Hard - 7 Minutes
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
