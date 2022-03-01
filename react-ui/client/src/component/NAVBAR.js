import React, { useState,useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap/";
import NotLoggedInUser from "./notloggedIn";

export default function Header(props) {
const [username,setUsername]=useState('')
  const loggedUser=0 ||localStorage.getItem('user')
  useEffect(()=>{
    if(loggedUser){
      let userdetail=JSON.parse(localStorage.getItem('user'))
      console.log("userdetail object",userdetail.user)
      setUsername(userdetail.user.firstname)
    }
  },[loggedUser])
  function handleLogout(){
    localStorage.clear()
    window.location.href = '/';

  }

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
          <NavDropdown title={username} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={handleLogout}>Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
    </Nav>:<NotLoggedInUser data={props}/>}
         
        </Container>
      </Navbar>
      <br />
    </>
  );
}
