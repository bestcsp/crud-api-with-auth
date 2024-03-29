import { Form, Button, Modal } from "react-bootstrap/";
import React, { useState } from "react";
import PostApiCall from "./api_call";

const Signup = (props) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password1, setpassword1] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  function SignupApi(data) {
    PostApiCall(data, "/signup", null, "post")
      .then((response) => {
        console.log("login response", response);
        localStorage.setItem("user", response);
        props.props.set.data.setSucess(true);
        props.props.set.data.setMessage("You have successfully signed Signup");
        props.props.onHide();
      })
      .catch((err) => {
        console.log("error after signup call", err);
        props.props.set.data.setError(true);        
        // err.messsge = "User Already exists with email";
        props.props.set.data.setMessage(err);
        props.props.onHide();
      });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (firstname && lastname && email && mobile && password && password1) {
      if (password === password1 && password.length > 8) {
        console.log("All data is filled");
        console.log(firstname, lastname, email, mobile, password, password1);
        let data = {
          firstname,
          lastname,
          email,
          mobile,
          password,
          address: "",
        };
        return SignupApi(data);
      } else {
        props.props.set.data.setError(true)
        props.props.set.data.setMessage("Password not valid ")
        props.props.onHide();
      }
      return;
    } else {
      console.log("all data not filled");
      console.log(firstname, lastname, email, mobile, password, password1);
      return;
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter FirstName"
            onChange={(e) => setfirstname(e.target.value)}
          />
          <Form.Text value={firstname} className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter lastname"
            onChange={(e) => setlastname(e.target.value)}
          />
          <Form.Text value={lastname} className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? "input" : "password"}
            value={password}
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            label={`Show Password`}
            onChange={(e) => setshowPassword(!showPassword)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={password1}
            placeholder="Password"
            onChange={(e) => setpassword1(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formmobile">
          <Form.Label>mobile</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter mobile"
            onChange={(e) => setmobile(e.target.value)}
          />
          <Form.Text className="text-muted" value={mobile}></Form.Text>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={props.props.onHide}>Close</Button>
          </Modal.Footer>
        </Form.Group>
      </Form>
    </>
  );
};

export default Signup;
