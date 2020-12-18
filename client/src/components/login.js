import React from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const requiredMsg = "This field is required!!";
  const initialValues = {
    email: "",
    password: "",
  };

  function handleSubmit(fields) {
    console.log(fields);
    alert(`submit registration data to backend: ${JSON.stringify(fields)}`);
    const { firstName, lastName, email, password } = fields;
    return;
  }

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Header style={{ fontSize: "32px" }}>Login</Card.Header>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ marginTop: "10px" }}
          >
            Login to access your decks and reinfornce your knowledge
          </Card.Subtitle>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Email is invalid!!")
                .required(requiredMsg),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters!!")
                .required(requiredMsg),
            })}
            onSubmit={(fields) => {
              handleSubmit(fields);
            }}
            render={({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="text"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Login
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
