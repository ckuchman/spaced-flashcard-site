import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { toast } from "react-toastify";
import { fetchCall } from "./helpers";
import RateCard from "./rate-card";

/* props should contain question: string, answer: string, card_id: num */
export default function CardDisplay(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  console.log(`props i have in carddisplay are: ${JSON.stringify(props)}`);

  function handleClick(event) {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  async function handleRate(inputRating) {
    console.log(`in card-display, setting rating of card to ${inputRating}`);

    /* now, update the show date */
    /* to update show date, i need an id (card), question, answer, next_time_to_show, and user_deck_id */

    let payload = {
      url: process.env.REACT_APP_BASE_URL + "api/cards/",
      method: "POST",
      auth: true,
      body: {
        id: props.cardData.id,
        question: props.cardData.question,
        answer: props.cardData.answer,
        next_time_to_show: inputRating.toISOString(),
        user_deck_id: props.cardData.user_deck_id.id,
      },
    };
    try {
      let response = await fetchCall(payload);
      console.log(
        `response i received from updating card date is: ${JSON.stringify(
          response
        )}`
      );
      toast.success(
        `Next display time set: ${new Date(response.next_time_to_show)}`
      );
      setIsFlipped(false);
      props.nextCard();
    } catch (err) {
      toast.error(err.message);
    }

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
              <Card.Text style={{ flex: "1" }}>
                {props.cardData.question}
              </Card.Text>
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
              <Card.Text style={{ flex: "1" }}>
                {props.cardData.answer}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </ReactCardFlip>
      {isFlipped && <RateCard handleRate={handleRate} />}
    </>
  );
}
