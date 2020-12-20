import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CardDisplay from "./card-display";
import DeckInfo from "./deck-info";

const sampleDeck = [
  { question: "2+2=", answer: "4" },
  { question: "2+3=", answer: "5" },
  { question: "2+4=", answer: "6" },
  { question: "2+5=", answer: "7" },
  { question: "2+6=", answer: "8" },
  { question: "2+7=", answer: "9" },
  { question: "2+8=", answer: "10" },
];

/* props should contain either the deck card data itself or the deck_id */
export default function RunDeck() {
  const [cardIndex, setCardIndex] = useState(0);

  /* increases cardIndex to display the next card in deck */
  function nextCard() {
    console.log(`i'm calling nextcard`);
    if (cardIndex !== sampleDeck.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(-1);
    }
  }

  function redirectHome() {
    return;
  }

  /* need to pass CardDisplay userid, deckid, etc.. */
  return (
    <>
      {cardIndex !== -1 ? (
        <>
          <DeckInfo numCards={sampleDeck.length} cardIndex={cardIndex} />
          <CardDisplay
            index={cardIndex}
            question={sampleDeck[cardIndex].question}
            answer={sampleDeck[cardIndex].answer}
            nextCard={nextCard}
          />
        </>
      ) : (
        <>
          <h5>Nice work!</h5>
          <Button onClick={redirectHome}>Back to My Decks</Button>
        </>
      )}
    </>
  );
}
