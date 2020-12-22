import React, { useState, useEffect } from "react";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchCall } from "./helpers";

/* need deck id in props */
export default function CreateCard(props) {
  const [decks, setDecks] = useState([]);
  const initialValues = {
    question: "",
    answer: "",
  };
  const requiredMsg = "This field is required!!";
  const [selectedDeck, setSelectedDeck] = useState({
    deck_name: "Select Deck!",
  });

  useEffect(() => {
    /* get all the user's deck info */
    setSelectedDeck({
      deck_name: "Select Deck!",
    });
    async function fetchData() {
      let payload = {
        url: process.env.REACT_APP_BASE_URL + `api/decks/`,
        method: "GET",
        auth: true,
      };
      try {
        let response = await fetchCall(payload);
        console.log(`full list of decks is ${JSON.stringify(response)}`);
        let fullDecks = [];
        for (const element of response) {
          let obj = props.decks.find((object) => object.deck_id === element.id);
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
        return;
      } catch (err) {
        console.error(err);
        return;
        /* logout??? */
      }
    }
    fetchData();
  }, []);

  async function handleSubmit(fields) {
    if (selectedDeck.deck_name === "Select Deck!") {
      alert("please select (or create) a deck first!");
      return;
    }
    console.log(
      `create card handle submit: props i was passed are: ${JSON.stringify(
        fields
      )}`
    );
    let payload = {
      url: process.env.REACT_APP_BASE_URL + "api/cards/",
      method: "POST",
      auth: true,
      body: {
        question: fields.question,
        answer: fields.answer,
        user_deck_id: selectedDeck.id,
        next_time_to_show: "2020-10-12T00:00",
      },
    };
    try {
      let response = await fetchCall(payload);
      console.log(
        `card creation request response is : ${JSON.stringify(response)}`
      );
    } catch (err) {
      console.error(err);
      return;
    }
  }

  const deckDropdown = [];
  decks.forEach((deck, index) => {
    deckDropdown.push(
      <Dropdown.Item
        as="button"
        key={index}
        onClick={(e) => setSelectedDeck(deck)}
      >{`${deck.deck_name} - ${deck.deck_description}`}</Dropdown.Item>
    );
  });

  // function handleSelect(event) {
  //   setSelectedDeck(decks.find((object) => object.id === event.id));
  // }

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Header style={{ fontSize: "32px" }}>
            Create Flashcard
          </Card.Header>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ marginTop: "10px" }}
          >
            Give us a question and an answer
          </Card.Subtitle>
          <DropdownButton
            id="dropdown-basic-button"
            title={`${selectedDeck.deck_name}`}
            // onSelect={handleSelect}
          >
            {deckDropdown}
          </DropdownButton>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              question: Yup.string().required(requiredMsg),
              answer: Yup.string().required(requiredMsg),
            })}
            onSubmit={(fields, actions) => {
              handleSubmit(fields);
              actions.resetForm({ fields: { question: "", answer: "" } });
            }}
            render={({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="question">Question</label>
                  <Field
                    as="textarea"
                    name="question"
                    type="text"
                    className={
                      "form-control" +
                      (errors.question && touched.question ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="question"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="answer">Answer</label>
                  <Field
                    as="textarea"
                    name="answer"
                    type="text"
                    className={
                      "form-control" +
                      (errors.answer && touched.answer ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="answer"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Create Card!
                  </button>
                  <button
                    onClick={() => {
                      props.cardCallback();
                    }}
                    type="reset"
                    className="btn btn-secondary"
                  >
                    Hide
                  </button>
                </div>
              </Form>
            )}
          />
        </Card.Body>
      </Card>
    </>
  );
}
