import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";
import AddDeck from "./add-deck";
import CreateCard from "./create-card";
import { fetchCall } from "./helpers";

const sampleDecks = [
  { id: 13, user_id: 4, deck_id: 8 },
  { id: 12, user_id: 4, deck_id: 9 },
];

export default function Profile() {
  const location = useLocation();
  const [decks, setDecks] = useState([]);
  const [addingDeck, setAddingDeck] = useState(false);
  const [addingCard, setAddingCard] = useState(false);

  useEffect(() => {
    /* on component load, fetch user's decks from backend, add to state */
    // alert("fetch user's decks");
    /* temporary */
    setDecks(sampleDecks);
    setAddingCard(false);
    setAddingDeck(false);
    async function fetchData() {
      let payload = {
        url:
          process.env.REACT_APP_BASE_URL +
          `api/userdecks/user_list/?user_id=${location.state.id}`,
        method: "GET",
        auth: true,
      };
      try {
        let response = await fetchCall(payload);
        console.log(
          "response received from userdecks/user_list/",
          JSON.stringify(response)
        );
      } catch (err) {
        console.error(err);
        /* logout??? */
      }
    }
    fetchData();
  }, []);

  function deckCallback() {
    setAddingDeck(false);
  }

  function cardCallback() {
    setAddingCard(false);
  }

  /* i need to pass all of the userdeck ids to the create card component, then
   * do a dropdown to select the deck */
  return (
    <>
      <h1>profile page... protected!</h1>
      {!addingDeck && (
        <Button
          onClick={() => {
            setAddingDeck(true);
          }}
        >
          Create a New Deck!
        </Button>
      )}
      {!addingCard && (
        <Button
          onClick={() => {
            setAddingCard(true);
          }}
        >
          Create Flashcard!
        </Button>
      )}
      {addingDeck && (
        <AddDeck userId={location.id} deckCallback={deckCallback} />
      )}
      {addingCard && <CreateCard decks={decks} />}
    </>
  );
}
