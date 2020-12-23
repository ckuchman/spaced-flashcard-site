import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import RateCard from "./rate-card";

/* props should contain question: string, answer: string, card_id: num */
export default function CardDisplay(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [, setRating] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  function handleRate(rating) {
    setRating(rating);
    setIsFlipped(false);
    props.nextCard();
    /* here, need to make API call to set the next display time of the current card */
  }

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <a
          style={{ cursor: "pointer" }}
          onClick={(event) => {
            handleClick(event);
          }}
        >
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
        <a
          style={{ cursor: "pointer" }}
          onClick={(event) => {
            handleClick(event);
          }}
        >
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
      {isFlipped && <RateCard handleRate={handleRate} />}
    </>
  );
}
