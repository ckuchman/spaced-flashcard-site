import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router";
import AddDeck from "./add-deck";
import { authService } from "./auth-service";
import CreateCard from "./create-card";
import { fetchCall } from "./helpers";
import { toast } from "react-toastify";

export default function Profile(props) {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  const [addingDeck, setAddingDeck] = useState(false);
  const [addingCard, setAddingCard] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState({ deck_name: "My Decks" });

  
  console.log(
    `in the Profile page, i was passed these props: ${JSON.stringify(props)}`
  );
  const currentUser =
    props.currentUser?.userData?.id ||
    authService.currentUserValue?.userData?.id;
  console.log("current user is:", currentUser);

  useEffect(() => {
    /* log out if no user data was passed */
    if (!currentUser) {
      alert("Error retrieving logged-in user data!  Logging you out!");
      props.logoutHelper();
      history.push("/");
      return;
    }
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
      try {
        let response = await fetchCall(payload);
        console.log(
          "response received from userdecks/user_list/",
          JSON.stringify(response)
        );
        for (let element of response) {
          element.user_id = element.user_id.id;
          element.deck_name = element.deck_id.deck_name;
          element.deck_description = element.deck_id.deck_description;
          element.deck_id = element.deck_id.id;
        }
        setDecks(response);
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
    history.push(`/rundeck/:${selectedDeck.id}`);
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
