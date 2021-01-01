import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
      {/* <Navbar 
        style={{
          justifyContent: 'space-between',
          height: '5em',
          position: "sticky",
          top: 0
        }} 
        bg="light" 
        variant="light"
      >
        <Navbar.Brand href="#home">Pooja's Bollywood Academy</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/classes">Classes</Nav.Link>
          <Nav.Link href="#features">Schedule</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar> */}

      <ReactBootStrap.Navbar 
        collapseOnSelect expand="lg" 
        bg="dark" 
        variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">Pooja's Bollywood Academy</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/classes">Classes</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Media</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">News/Articles</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/about">About</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/events">Events</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="/contact">
              Contact
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </>

    );
  }
  
  export default Navigation;