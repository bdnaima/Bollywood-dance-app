import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
      <ReactBootStrap.Navbar 
        collapseOnSelect expand="lg" 
        variant="dark"
        sticky="top">
        <ReactBootStrap.Navbar.Brand href="/">Pooja's Bollywood Dance Academy</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/classes">Classes</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/calendar">Schedule</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="/media">Media</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">News/Articles</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/about">About</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/events">Events</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="/contact">Contact</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </>

    );
  }
  export default Navigation;