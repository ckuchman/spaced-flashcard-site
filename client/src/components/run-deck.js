import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CardDisplay from "./card-display";
import DeckInfo from "./deck-info";
import { useHistory } from "react-router-dom";
import { fetchCall } from "./helpers";

// const sampleDeck = [
//   { question: "2+2=", answer: "4" },
//   { question: "2+3=", answer: "5" },
//   { question: "2+4=", answer: "6" },
//   { question: "2+5=", answer: "7" },
//   { question: "2+6=", answer: "8" },
//   { question: "2+7=", answer: "9" },
//   { question: "2+8=", answer: "10" },
// ];

/* props should contain either the deck card data itself or the deck_id */
export default function RunDeck(props) {
  const history = useHistory();
  const [cardIndex, setCardIndex] = useState(0);
  const [cards, setCards] = useState([]);

  let { user_deck_id } = props.match.params;
  user_deck_id = user_deck_id.substring(1);
  console.log(`props.match.params is: ${JSON.stringify(props.match.params)}`);
  console.log(`user_deck_id i set is: ${user_deck_id}`);
  useEffect(() => {
    async function fetchData() {
      let payload = {
        url:
          process.env.REACT_APP_BASE_URL +
          `api/userdecks/card_list/?userdeck=${user_deck_id}`,
        method: "GET",
        auth: true,
      };
      let response = await fetchCall(payload);
      console.log(
        `returned list of cards for deck with user_deck_id=${user_deck_id} is: ${JSON.stringify(
          response
        )}`
      );
      setCards(response);
    }
    fetchData();
  }, []);

  /* increases cardIndex to display the next card in deck */
  function nextCard() {
    console.log(`i'm calling nextcard`);
    if (cardIndex !== cards.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(-1);
    }
  }

  function redirectHome() {
    history.push("/profile");
    return;
  }

  /* need to pass CardDisplay userid, deckid, etc.. */
  return (
    <>
      {cards.length > 0 && cardIndex !== -1 ? (
        <>
          <DeckInfo numCards={cards.length} cardIndex={cardIndex} />
          <CardDisplay
            index={cardIndex}
            question={cards[cardIndex].question}
            answer={cards[cardIndex].answer}
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
