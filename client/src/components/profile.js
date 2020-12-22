import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router";
import AddDeck from "./add-deck";
import { authService } from "./auth-service";
import CreateCard from "./create-card";
import { fetchCall } from "./helpers";

// const sampleDecks = [
//   { id: 13, user_id: 4, deck_id: 8 },
//   { id: 12, user_id: 4, deck_id: 9 },
// ];

export default function Profile(props) {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  const [addingDeck, setAddingDeck] = useState(false);
  const [addingCard, setAddingCard] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState({ deck_name: "My Decks" });

  console.log(
    `in the Profile page, i was passed these props: ${JSON.stringify(props)}`
  );
  // console.log(JSON.stringify(props.currentUser.userData.id));

  const currentUser =
    props.currentUser && props.currentUser.userData
      ? props.currentUser.userData.id
      : authService.currentUserValue.userData
      ? authService.currentUserValue.userData.id
      : null;

  console.log("current user is:", currentUser);

  useEffect(() => {
    /* on component load, fetch user's decks from backend, add to state */
    // alert("fetch user's decks");
    /* temporary */
    setAddingCard(false);
    setAddingDeck(false);
    async function fetchData() {
      let payload = {
        url:
          process.env.REACT_APP_BASE_URL +
          `api/userdecks/user_list/?user=${currentUser}`,
        method: "GET",
        auth: true,
      };
      let deckPayload = {
        url: process.env.REACT_APP_BASE_URL + "api/decks/",
        method: "GET",
        auth: true,
      };
      try {
        let response = await fetchCall(payload);
        console.log(
          "response received from userdecks/user_list/",
          JSON.stringify(response)
        );
        let deckResponse = await fetchCall(deckPayload);
        let fullDecks = [];
        for (const element of deckResponse) {
          let obj = response.find((object) => object.deck_id === element.id);
          if (obj !== undefined) {
            let toAdd = {
              id: obj.id,
              deck_id: obj.deck_id,
              user_id: obj.user_id,
              deck_name: element.deck_name,
              deck_description: element.deck_description,
            };
            fullDecks.push(toAdd);
          }
        }
        setDecks(fullDecks);
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

  const deckDropdown = [];
  decks.forEach((deck, index) => {
    deckDropdown.push(
      <Dropdown.Item
        as="button"
        key={index}
        onClick={() => setSelectedDeck(deck)}
      >{`${deck.deck_name} - ${deck.deck_description}`}</Dropdown.Item>
    );
  });

  function handleClick() {
    history.push({
      pathname: "/rundeck",
      state: { user_deck_id: selectedDeck.id, user_id: props.currentUser },
    });

    return;
  }

  /* i need to pass all of the userdeck ids to the create card component, then
   * do a dropdown to select the deck */
  return (
    <>
      <h1>Create</h1>
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
        <AddDeck userId={currentUser} deckCallback={deckCallback} />
      )}
      {addingCard && <CreateCard cardCallback={cardCallback} decks={decks} />}
      <h1>Learn</h1>
      <DropdownButton
        id="dropdown-basic-button"
        title={`${selectedDeck.deck_name}`}
      >
        {deckDropdown}
      </DropdownButton>
      <br />
      {selectedDeck.deck_name !== "My Decks" && (
        <Button
          variant="success"
          onClick={handleClick}
        >{`Run deck: ${selectedDeck.deck_name}`}</Button>
      )}
    </>
  );
}
