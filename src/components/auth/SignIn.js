import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { auth } from '../../firebase/firebaseIndex'

const StyledForm = styled.form`
    background-color: #66CDAA;
    color: white;
    border-radius: 2em;
    padding: 40px;
`;

const SignIn = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.error(errorCode, errorMessage)
        });

    }
    return (
        <Container 
            className="d-flex align-items-center justify-content-center" 
            style={{ minHeight: "100vh" }}>
            <div 
            className="w-100" 
            style={{
                maxWidth: "400px", 
                boxShadow: "1px 2px 5px 8px rgb(0,128,128)", 
                borderRadius:"2em" 
            }}>
            <StyledForm onSubmit={handleSubmit}>
                <h1>Sign In</h1>               
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            ref={ emailRef } 
                            placeholder="Enter email" />
                    </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        ref={ passwordRef } 
                        placeholder="Password" />
                </Form.Group>
                <Button 
                    className="w-100 btn-signup" 
                    type="submit"
                    style={{boxShadow:" 1px 1px 2px 1px black"}}>
                Sign in
                </Button>    
                <p className="logging-in">Or</p>
                <div>
                    <Button className="w-100 btn-signup"><Link to="/signup">Create new profile</Link></Button>
                </div>           
            </StyledForm>
        </div>
    </Container>
    )
}

export default SignIn;