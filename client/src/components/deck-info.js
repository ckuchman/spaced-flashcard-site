import React from "react";

/* props must include total number of cards in deck and current card */
export default function DeckInfo(props) {
  const numCards = props.numCards;
  const cardIndex = props.cardIndex;

  return <h5>{`Flashcard ${cardIndex + 1} of ${numCards}`}</h5>;
}
