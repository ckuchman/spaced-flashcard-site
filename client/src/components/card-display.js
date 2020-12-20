import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

/* props should contain question: string, answer: string, card_id: num */
export default function CardDisplay(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setIsFlipped(!isFlipped);
    props.handleClick(event)
  }

  console.log(`props i was passed is: ${props}`)

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <a style={{ cursor: "pointer" }} onClick={handleClick}>
        <Card>
          <Card.Body
            style={{
              display: "flex",
              alignItems: "center",
              height: "420px",
            }}
          >
            <Card.Text style={{ flex: "1" }}>{props.question}</Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a style={{ cursor: "pointer" }} onClick={handleClick}>
        <Card>
          <Card.Body
            style={{
              display: "flex",
              alignItems: "center",
              height: "420px",
            }}
          >
            <Card.Text style={{ flex: "1" }}>{props.answer}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </ReactCardFlip>
  );
}
