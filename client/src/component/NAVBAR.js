import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap/";
import NotLoggedInUser from "./notloggedIn";
import Logout from "./logout";


export default function Header(props) {
  const [username, setUsername] = useState("");
  const loggedUser = 0 || localStorage.getItem("user");
  useEffect(() => {
    if (loggedUser) {
      let userdetail = JSON.parse(localStorage.getItem("user"));
      console.log("userdetail object", userdetail.user);
      setUsername(userdetail.user.firstname);
    }
  }, [loggedUser]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">CSP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            {/* <Nav.Link href="">Pricing</Nav.Link> */}
          </Nav>
          {loggedUser ? (
            <Nav>
              <NavDropdown title={username} id="basic-nav-dropdown">
                <NavDropdown.Item href='/profile'>Profile

                </NavDropdown.Item>
                <NavDropdown.Item href="/resetPassword" >
                  ResetPassword
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={() => Logout()}>
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          ) : (
            <NotLoggedInUser data={props} />
          )}
        </Container>
      </Navbar>
      <br />
    </>
  );
}
