import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchCall } from "./helpers";

/* need deck id in props */
export default function CreateCard(props) {
  const initialValues = {
    question: "",
    answer: "",
  };
  const requiredMsg = "This field is required!!";

  function handleSubmit(fields) {
    console.log(
      `create card handle submit: props i was passed are: ${JSON.stringify(
        fields
      )}`
    );
    return;
  }

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
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              question: Yup.string().required(requiredMsg),
              answer: Yup.string().required(requiredMsg),
            })}
            onSubmit={(fields) => {
              handleSubmit(fields);
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
