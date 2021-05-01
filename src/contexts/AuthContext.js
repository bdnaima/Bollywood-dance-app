import React, { useState, useEffect, useRef, useContext } from 'react';
import { db } from '../firebase/firebaseIndex';
import styled from 'styled-components';
import { Button, Modal, Form} from 'react-bootstrap';
import { auth } from '../firebase/firebaseIndex';

const StyledForm = styled.form`
    background-color: whitesmoke;
    color: black;
    border-radius: 2em;
    padding: 40px;
`;

export const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [nameSignup, setNameSignup] = useState("");
  const emailSignupRef = useRef(null);
  const passwordSignupRef = useRef(null);
  const emailSigninRef = useRef(null);
  const passwordSigninRef = useRef(null);

  const handleSignupModal = () => {
    setShowSignupModal(true);
    setShowSigninModal(false);
  }

  const handleSignupClose = () => {
    setShowSignupModal(false);
  }

  const handleSigninModal = () => {
    setShowSigninModal(true);
    setShowSignupModal(false);
  }

  const handleSigninClose = () => {
    setShowSigninModal(false);
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailSignupRef.current.value;
    const passwordValue = passwordSignupRef.current.value;

    auth.createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((cred) => {
        db.collection('users').doc(cred.user.uid).set({
          role: "student",
          name: nameSignup
        })
        setShowSignupModal(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
      });
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

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (!user) {
        setUser(null);
        setUserInfo(null);
        return
      } 
      const snapshot = await db.collection('users').doc(user.uid).get()
      if (snapshot.exists) {
        setUserInfo(snapshot.data())
        setUser(user);
      } else {
        console.error("This user's document does not exist. Signing out...")
        auth.signOut();
      }
    });
  });

  return (
    <>
      <AuthContext.Provider value={{user, userInfo, signin: handleSigninModal, signout: handleSignout}}>{children}</AuthContext.Provider>
      {/* Sign In Modal */}
      <Modal
        show={showSigninModal}
        onHide={handleSigninClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <StyledForm onSubmit={handleSigninSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailSigninRef}
                placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordSigninRef}
                placeholder="Password" />
            </Form.Group>
            <Button
              className="w-100 btn-signup"
              type="submit"
              style={{ boxShadow: " 1px 1px 2px 1px black" }}>Sign in</Button>
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
        onHide={handleSignupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <StyledForm onSubmit={handleSignupSubmit}>
          <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                ref={emailSignupRef}
                placeholder="Name"
                onChange={(e) => setNameSignup(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailSignupRef}
                placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordSignupRef}
                placeholder="Password" />
            </Form.Group>
            <Button
              className="w-100 btn-signup"
              type="submit"
              style={{ boxShadow: " 1px 1px 2px 1px black" }}>Sign up</Button>
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