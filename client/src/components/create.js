import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import AddDeck from "./add-deck";
import { authService } from "./auth-service";
import CreateCard from "./create-card";
import { fetchCall } from "./helpers";
import { toast } from "react-toastify";

export default function Create(props) {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  const [addingDeck, setAddingDeck] = useState(false);
  const [addingCard, setAddingCard] = useState(false);
  const [newDeck, setNewDeck] = useState(0);

  console.log(
    `in the Create page, i was passed these props: ${JSON.stringify(props)}`
  );
  const currentUser =
    props.currentUser?.userData?.id ||
    authService.currentUserValue?.userData?.id;

  useEffect(() => {
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
        toast.error("Error fetching user data!");
        props.logoutHelper();
        history.push("/");
        return;
      }
    }
    fetchData();
  }, [newDeck]);

  function deckRerender() {
    setNewDeck(newDeck + 1);
  }

  function deckCallback() {
    setAddingDeck(false);
  }

  function cardCallback() {
    setAddingCard(false);
  }

  return (
    <>
      <h1>Create</h1>
      <br />
      <h5 className="text-muted">
        <em>
          Make some decks, add some flashcards, and let spaced repetition work
          for you!
        </em>
      </h5>
      <Container fluid="xl">
        <Row>
          <Col xl="auto" style={{ flex: "1", padding: "50px" }}>
            {!addingDeck ? (
              <Button
                block
                onClick={() => {
                  setAddingDeck(true);
                }}
              >
                Create a New Deck!
              </Button>
            ) : (
              <AddDeck
                userId={currentUser}
                deckCallback={deckCallback}
                deckRerender={deckRerender}
              />
            )}
          </Col>
          <Col xl="auto" style={{ flex: "1", padding: "50px" }}>
            {!addingCard ? (
              <Button
                block
                onClick={() => {
                  setAddingCard(true);
                }}
              >
                Create Flashcards!
              </Button>
            ) : (
              <CreateCard cardCallback={cardCallback} decks={decks} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
