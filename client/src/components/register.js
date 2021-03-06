import React from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchCall } from "./helpers";
import { authService } from "./auth-service";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const requiredMsg = "This field is required!!";
  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  async function handleSubmit(values, actions) {
    let payload = {
      url: process.env.REACT_APP_BASE_URL + "auth/users/",
      method: "POST",
      auth: false,
      body: {
        username: values.username,
        email: values.email,
        password: values.password,
      },
    };
    try {
      let response = await fetchCall(payload);
      /* now that user has been created, get the jwt */
      payload.url = process.env.REACT_APP_BASE_URL + "auth/jwt/create/";
      let jwtresponse = await fetchCall(payload);
      jwtresponse.userData = { ...response };
      authService.login(jwtresponse);
      toast.success(`Registration successful!  Welcome, ${response?.username}`);
      history.push("/profile");
      return;
    } catch (err) {
      let msg = err.data.username || err.data.password || err.data.email;
      toast.error(
        <div>
          {"Registration Error!"}
          <br />
          {msg}
        </div>
      );
      actions.resetForm();
      return;
    }
  }

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Header
            style={{
              fontSize: "32px",
              backgroundColor: "lightgray",
              fontFamily: "'Lalezar', cursive",
            }}
          >
            Register
          </Card.Header>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ marginTop: "10px" }}
          >
            Begin learning today by creating an account and joining the Spaced
            Flashcards community! Just give us some basic information...
          </Card.Subtitle>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Email is invalid!!")
                .required(requiredMsg),
              username: Yup.string().required(requiredMsg),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters!!")
                .required(requiredMsg),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords don't match!!")
                .required(requiredMsg),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
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
                  <label htmlFor="username">Username (email)</label>
                  <Field
                    name="username"
                    type="text"
                    className={
                      "form-control" +
                      (errors.username && touched.username ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="username"
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
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Register
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </>
  );
}
