import React from "react";
import { fetchCall } from "./helpers";
import { Card } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

/* will prob need userid in props */
export default function AddDeck(props) {
  const history = useHistory();
  const initialValues = {
    deck_name: "",
    deck_description: "",
  };
  const requiredMsg = "This field is required!!";

  async function handleSubmit(values, actions) {
    console.log(
      `create deck handle submit: props i was passed are: ${JSON.stringify(
        values
      )}`
    );
    const { deck_name, deck_description } = values;
    try {
      /* create the deck itself */
      let payload = {
        url: process.env.REACT_APP_BASE_URL + "api/decks/",
        method: "POST",
        auth: true,
        body: {
          deck_name: deck_name,
          deck_description: deck_description,
        },
      };
      let response = await fetchCall(payload);
      console.log(
        `the response from create deck is ${JSON.stringify(response)}`
      );
      let userDeckPayload = {
        url: process.env.REACT_APP_BASE_URL + "api/userdecks/",
        method: "POST",
        auth: true,
        body: {
          user_id: props.userId,
          deck_id: response.id,
        },
      };
      let userDeckResponse = await fetchCall(userDeckPayload);
      console.log(`userdeck response is ${JSON.stringify(userDeckResponse)}`);
      toast.success(`Created deck: ${response.deck_name}`);
      props.deckRerender();
      actions.resetForm();
      // history.push("/temp");
      // history.goBack();
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  return (
    <Card style={{ height: "100%" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div className="mb-auto">
          <Card.Header style={{ fontSize: "32px" }}>
            Create New Deck
          </Card.Header>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ marginTop: "25px" }}
          >
            Name your new deck and give a description!
          </Card.Subtitle>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            deck_name: Yup.string().required(requiredMsg),
            deck_description: Yup.string().required(requiredMsg),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group pb-4">
                <label htmlFor="deck_name">Deck Name</label>
                <Field
                  name="deck_name"
                  type="text"
                  className={
                    "form-control" +
                    (errors.deck_name && touched.deck_name ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="deck_name"
                  component="div"
                  className="invalid-feedback"
                />
                <div className="form-group pt-4">
                  <label htmlFor="deck_description">Deck Description</label>
                  <Field
                    name="deck_description"
                    type="text"
                    className={
                      "form-control" +
                      (errors.deck_description && touched.deck_description
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="deck_description"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">
                  Create Deck!
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary"
                  onClick={() => {
                    props.deckCallback();
                  }}
                >
                  Hide
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}
