import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

export default function CardDisplay(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

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
            <Card.Text style={{ flex: "1" }}>Question!!!!!</Card.Text>
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
            <Card.Text style={{ flex: "1" }}>Answer!!!</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </ReactCardFlip>
  );
}
