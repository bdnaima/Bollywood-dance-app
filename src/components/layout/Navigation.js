import React from 'react'
import { Link } from 'react-router-dom'
import * as ReactBootStrap from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
      <ReactBootStrap.Navbar 
        collapseOnSelect expand="lg" 
        bg="dark"
        variant="dark"
        sticky="top">
        <Link to="/">
          <ReactBootStrap.Navbar.Brand>Pooja's Bollywood Dance Academy</ReactBootStrap.Navbar.Brand>
        </Link>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link>
              <Link to="/classes">Classes</Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link>
              <Link to="/calendar">Schedule</Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">             
              <ReactBootStrap.NavDropdown.Item> 
                <Link to="/media" style={{color: "black"}}>Media</Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item>
                <Link to="/news" style={{color: "black"}}>News</Link>
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            
              <ReactBootStrap.Nav.Link>
              <Link to="/events">Events</Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2}>
                <Link to="/contact">Contacts</Link>
              </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </>

    );
  }
  export default Navigation;