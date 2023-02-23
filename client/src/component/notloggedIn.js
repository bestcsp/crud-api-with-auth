import { Button, Modal } from "react-bootstrap/";
import Signup from "./signup";
import Login from "./loginForm";

import React from "react";

const NotLoggedInUser = (props) => {
  const [register, setregister] = React.useState(false);
  const [login, setlogin] = React.useState(false);
  function RegisterForm(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Signup </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup props={props} />
        </Modal.Body>
      </Modal>
    );
  }
  function LoginForm(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login props={props} />
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      {/* <Button variant="primary" onClick={() => <Signup/>}>Signup</Button>{' '}
          <Button variant="primary">Login</Button>{' '} */}

      <Button variant="primary" className="mx-3" onClick={() => setregister(true)}>
        Signup
      </Button>

      <RegisterForm show={register} onHide={() => setregister(false)} set={props} />

      <Button variant="primary" onClick={() => setlogin(true)}>
        Login
      </Button>

      <LoginForm show={login} onHide={() => setlogin(false)} set={props}/>
    </>
  );
};

export default NotLoggedInUser;
