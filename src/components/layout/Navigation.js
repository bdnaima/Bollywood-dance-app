import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavDropdown, } from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
      <Navbar 
        collapseOnSelect expand="lg" 
        bg="dark"
        variant="dark"
        sticky="top">
        <Link to="/">
          <Navbar.Brand>Pooja's Bollywood Dance Academy</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/classes">Classes</Nav.Link>
            <Nav.Link as={Link} to="/calendar">Schedule</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">             
              <NavDropdown.Item as={Link} to="/media" style={{color: "black"}}>Media</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/news" style={{color: "black"}}>News</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Navigation;