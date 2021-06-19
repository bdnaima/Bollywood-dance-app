import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useAuthContext } from '../../contexts/AuthContext';


const Navigation = () => {
  const { user, userInfo, signin, signout } = useAuthContext();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Link to="/">
        <Navbar.Brand>Pooja's Bollywood Dance Academy</Navbar.Brand>
      </Link>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/admin">Classes</Nav.Link>
          <Nav.Link as={Link} to="/calendar">Schedule</Nav.Link>
          <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/media">Media</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Text>{`${userInfo ? userInfo.name : ""}`}</Navbar.Text>
      {user ? null : <Button onClick={signin}>Sign in</Button>}
      {user && <Button id="anchor-white" onClick={signout}>Sign out</Button>}

    </Navbar>
  );
}
export default Navigation;