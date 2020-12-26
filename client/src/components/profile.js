import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Redirect, useHistory } from "react-router";
import { authService } from "./auth-service";
import { fetchCall } from "./helpers";
import MyDecks from "./my-decks";

export default function Profile(props) {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  console.log(
    `in the Profile page, i was passed these props: ${JSON.stringify(props)}`
  );
  const currentUser =
    props?.currentUser?.userData?.id ||
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
          payload.url =
            process.env.REACT_APP_BASE_URL +
            `api/userdecks/card_list/?userdeck=${element.id}`;
          element.cards = await fetchCall(payload);
        }
        setDecks(response);
      } catch (err) {
        console.error(err);
        /* logout??? */
      }
    }
    fetchData();
  }, []);

  function handleRun(userDeckId) {
    history.push(`/rundeck/:${userDeckId}`);
    return;
  }

  let tableData = [];
  decks.forEach((deck) => {
    tableData.push({
      deckName: deck.deck_name,
      description: deck.deck_description,
      numCards: deck.cards.length,
      available: deck.cards.length,
      user_deck_id: deck.id,
    });
  });

  /* i need to pass all of the userdeck ids to the create card component, then
   * do a dropdown to select the deck */
  return !props.currentUser?.userData?.id ? (
    <Redirect to="/" />
  ) : (
    <>
      <MyDecks
        data={tableData}
        title={props.currentUser.userData.username.split("@")[0] + "'s Decks"}
        handleRun={handleRun}
      />
    </>
  );
}
