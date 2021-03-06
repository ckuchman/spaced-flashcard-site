import React from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchCall } from "./helpers";
import { authService } from "./auth-service";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const requiredMsg = "This field is required!!";
  const initialValues = {
    username: "",
    password: "",
  };

  async function handleSubmit(values, actions) {
    const payload = {
      url: process.env.REACT_APP_BASE_URL + "auth/jwt/create/",
      method: "POST",
      auth: false,
      body: {
        username: values.username,
        password: values.password,
      },
    };
    try {
      let response = await fetchCall(payload);
      let headers = {
        "Content-Type": "application/json",
        Authorization: `JWT ${response?.access}`,
      };
      let idResponse = await fetch(
        `${process.env.REACT_APP_BASE_URL}auth/users/`,
        { headers }
      );
      idResponse = await idResponse.json();
      response.userData = { ...idResponse[0] };
      authService.login(response);
      toast.success(`Welcome back, ${values.username}!`);
      history.push("/profile");
      return;
    } catch (err) {
      toast.error(
        <div style={{ textAlign: "center" }}>
          {`Login Error!`}
          <br />
          {err.message}
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
            Login
          </Card.Header>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ marginTop: "10px" }}
          >
            Login to access your decks and reinfornce your knowledge
          </Card.Subtitle>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              username: Yup.string().required(requiredMsg),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters!!")
                .required(requiredMsg),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
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
                  <button type="submit" className="btn btn-primary mr-2">
                    Login
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
