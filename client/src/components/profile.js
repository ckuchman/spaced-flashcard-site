import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { authService } from "./auth-service";
import { fetchCall } from "./helpers";
import MyDecks from "./my-decks";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Profile(props) {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUser =
    props?.currentUser?.userData?.id ||
    authService.currentUserValue?.userData?.id;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let payload = {
        url:
          process.env.REACT_APP_BASE_URL +
          `api/userdecks/user_list/?user=${currentUser}`,
        method: "GET",
        auth: true,
      };
      try {
        let response = await fetchCall(payload);
        for (let element of response) {
          element.user_id = element.user_id.id;
          element.deck_name = element.deck_id.deck_name;
          element.deck_description = element.deck_id.deck_description;
          element.deck_id = element.deck_id.id;
          payload.url =
            process.env.REACT_APP_BASE_URL +
            `api/userdecks/card_list/?userdeck=${element.id}`;
          let response2 = await fetchCall(payload);
          element.cards = response2;
          element.numCards = response2.length;
          payload.url =
            process.env.REACT_APP_BASE_URL +
            `api/userdecks/${element.id}/active_cards/`;
          response2 = await fetchCall(payload);
          element.availCards = response2.length;
        }
        setDecks(response);
        setLoading(false);
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

  /* i need to pass all of the userdeck ids to the create card component, then
   * do a dropdown to select the deck */
  return !props.currentUser?.userData?.id ? (
    <Redirect to="/" />
  ) : loading ? (
    <div style={{ marginTop: "25%" }}>
      <CircularProgress color="secondary" />
    </div>
  ) : (
    <>
      <MyDecks
        title={props.currentUser.userData.username.split("@")[0] + "'s Decks"}
        handleRun={handleRun}
        decks={decks}
      />
    </>
  );
}
