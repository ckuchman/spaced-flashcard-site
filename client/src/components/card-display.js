import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { toast } from "react-toastify";
import { fetchCall } from "./helpers";
import RateCard from "./rate-card";

/* props should contain question: string, answer: string, card_id: num */
export default function CardDisplay(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  async function handleRate(inputRating) {
    /* now, update the show date */
    let payload = {
      url: `${process.env.REACT_APP_BASE_URL}api/cards/${props.cardData.id}/`,
      method: "PATCH",
      auth: true,
      body: {
        next_time_to_show: inputRating.toISOString(),
      },
    };
    try {
      let response = await fetchCall(payload);
      toast.success(
        `Next display time set: ${new Date(response.next_time_to_show)}`,
        {
          autoClose: 2000,
        }
      );
      setIsFlipped(false);
      props.nextCard();
    } catch (err) {
      toast.error(err.message);
    }
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
