import { Form, Button, Modal } from "react-bootstrap/";
import React, { useState } from "react";
import PostApiCall from "./api_call";
const gauthLogin = process.env.REACT_APP_API_URL + "/auth/google";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (email && password) {
      let data = {
        email,
        password,
      };
      PostApiCall(data, "/signin", null, "post")
        .then((response) => {
          console.log("login response", response);
          localStorage.setItem("user", response);
          props.props.set.data.setSucess(true);
          props.props.set.data.setMessage(
            "You have successfully signed Signup"
          );
          props.props.onHide();
        })
        .catch((err) => {
          console.log("error", err);
          console.log(props.props.set.data.setError(true));
          console.log(
            props.props.set.data.setMessage(JSON.stringify(err.message))
          );
          props.props.onHide();
        });

    } else {
      console.log(props.props.set.data.setError(true));
      console.log(
        props.props.set.data.setMessage("Form is not properly filled")
      );
      props.props.onHide();

      return;
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={props.props.onHide}>Close</Button>
        </Modal.Footer>
      </Form>
      <hr></hr>

      <div className="google-btn-container">
        <a href={gauthLogin}>
          <div className="google-btn">
            <div className="google-icon-wrapper" style={{ border: "10px" }}>
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="signin"
                style={{
                  width: "20px",
                  float: "left",
                  "marginRight": "10px",
                  "marginLeft": "30px",
                }}
              />
            </div>
            <p className="btn-text">
              <b>Log in with Google</b>
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Login;
