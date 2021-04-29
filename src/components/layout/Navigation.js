import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Modal, Form} from 'react-bootstrap';
import { auth } from '../../firebase/firebaseIndex';
import { AuthContext } from '../../contexts/AuthContext';

const StyledForm = styled.form`
    background-color: whitesmoke;
    color: black;
    border-radius: 2em;
    padding: 40px;
`;

const Navigation = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);
  const emailSignupRef = useRef(null);
  const passwordSignupRef = useRef(null);
  const emailSigninRef = useRef(null);
  const passwordSigninRef = useRef(null);
  const user = useContext(AuthContext)

  const handleSignupModal = () => {
    setShowSignupModal(true);
    setShowSigninModal(false);
  }

  const handleSignupClose = () => {
    setShowSignupModal(false);
  }

  const handleSigninModal = () => {
    setShowSigninModal(true);
    setShowSignupModal(false)
  }

  const handleSigninClose = () => {
    setShowSigninModal(false);
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailSignupRef.current.value;
    const passwordValue = passwordSignupRef.current.value;

    auth.createUserWithEmailAndPassword(emailValue, passwordValue);
}

  const handleSigninSubmit = (e) => {
    e.preventDefault()

    const email = emailSigninRef.current.value
    const password = passwordSigninRef.current.value

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      setShowSigninModal(false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
    });
}

  const handleSignout = () => {
    auth.signOut()
  }
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
              <NavDropdown.Item as={Link} to="/media">Media</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/news">News</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contacts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>{`${user ? user.email : ""}`}</Navbar.Text>
        {user ? null : <Button onClick={handleSigninModal}>Sign in</Button>}
        {user && <Button id="anchor-white" onClick={handleSignout}>Sign out</Button>}
      </Navbar>
{/* Sign In Modal */}
      <Modal 
        show={showSigninModal} 
        onHide={handleSigninClose} 
        animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <StyledForm onSubmit={handleSigninSubmit}>              
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    ref={ emailSigninRef } 
                    placeholder="Enter email" />
            </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                ref={ passwordSigninRef } 
                placeholder="Password" />
        </Form.Group>
        <Button 
            className="w-100 btn-signup" 
            type="submit"
            style={{boxShadow:" 1px 1px 2px 1px black"}}>Sign in</Button>    
        <p className="logging-in">Or</p>
          <div>
              <Button onClick={handleSignupModal} variant="outline-secondary" className="w-100">Sign up</Button>
          </div>           
          </StyledForm>
        </Modal.Body>
    </Modal>

{/* Sign Up Modal */}
    <Modal 
            show={showSignupModal} 
            onHide={handleSignupClose} 
            animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <StyledForm onSubmit={handleSignupSubmit}>  
                <Form.Group >
                    <Form.Label>First name</Form.Label>
                    <Form.Control 
                        name="name" 
                        ref={ emailSignupRef } 
                        placeholder="Enter first name" />
                </Form.Group>     
                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control 
                        name="name" 
                        ref={ emailSignupRef } 
                        placeholder="Enter last name" />
                </Form.Group>                    
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        ref={ emailSignupRef } 
                        placeholder="Enter email" />
                </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    ref={ passwordSignupRef } 
                    placeholder="Password" />
            </Form.Group>
            <Button 
                className="w-100 btn-signup" 
                type="submit"
                style={{boxShadow:" 1px 1px 2px 1px black"}}>Sign up</Button>    
            <p className="logging-in">Or</p>
            <div>
                <Button onClick={handleSigninModal} variant="outline-secondary" className="w-100">Sign in</Button>
            </div>           
            </StyledForm>
            </Modal.Body>
        </Modal>
</>
  );
}
export default Navigation;