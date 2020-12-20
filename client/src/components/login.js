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

  async function handleSubmit(fields) {
    console.log(fields);
    // alert(`submit login data to backend: ${JSON.stringify(fields)}`);
    const { username, password } = fields;
    let payload = {
      url: process.env.REACT_APP_BASE_URL + "auth/jwt/create/",
      method: "POST",
      auth: false,
      body: {
        username: username,
        password: password,
      },
    };
    try {
      let response = await fetchCall(payload);
      console.log(`the response is: ${JSON.stringify(response)}`);
      response.userData = { username };
      console.log(`response to login call is ${JSON.stringify(response)}`);
      authService.login(response);
      history.push("/profile");
      return;
    } catch (err) {
      /* todo: error handling */
      console.error(err);
      toast.error(`Invalid login info, please retry!`);
      history.push("/temp");
      history.goBack();
      return;
    }
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
              username: Yup.string().required(requiredMsg),
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
          />
        </Card.Body>
      </Card>
    </>
  );
}
