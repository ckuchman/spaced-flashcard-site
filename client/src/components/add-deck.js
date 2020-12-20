import React from "react";
import { fetchCall } from "./helpers";
import { Card } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

/* will prob need userid in props */
export default function AddDeck(props) {
  const initialValues = {
    deck_name: "",
    deck_description: "",
  };
  const requiredMsg = "This field is required!!";

  function handleSubmit(fields) {
    console.log(
      `create deck handle submit: props i was passed are: ${JSON.stringify(
        fields
      )}`
    );
    const { deck_name, deck_description } = fields;
    
    return;
  }

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Header style={{ fontSize: "32px" }}>
            Create New Deck
          </Card.Header>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ marginTop: "10px" }}
          >
            Name your new deck and give a description!
          </Card.Subtitle>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              deck_name: Yup.string().required(requiredMsg),
              deck_description: Yup.string().required(requiredMsg),
            })}
            onSubmit={(fields) => {
              handleSubmit(fields);
            }}
            render={({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="deck_name">Deck Name</label>
                  <Field
                    name="deck_name"
                    type="text"
                    className={
                      "form-control" +
                      (errors.deck_name && touched.deck_name
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="deck_name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
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
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Create Deck!
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
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
