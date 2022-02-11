import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap/";
import NotLoggedInUser from "./notloggedIn";

export default function Header(props) {
  
  const loggedUser=0 ||localStorage.getItem('token')
  console.log(props,"aasas")
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CSP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">about</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          {loggedUser? <Nav>
          <NavDropdown title="ProfileName" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ProfileName</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
    </Nav>:<NotLoggedInUser data={props}/>}
         
        </Container>
      </Navbar>
      <br />
    </>
  );
}
