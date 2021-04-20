import React, { useRef } from 'react';
import { auth } from '../../firebase/firebaseIndex';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: #66CDAA;
    color: white;
    border-radius: 2em;
    padding: 40px;
`;

const SignUp = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        auth.createUserWithEmailAndPassword(emailValue, passwordValue);
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
                borderRadius:"2em" ,
                marginTop: "2em"
            }}>
            <StyledForm onSubmit={ handleSubmit }>
                <h1>Sign Up</h1>  
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control 
                            name="name" 
                            ref={ emailRef } 
                            placeholder="Enter first name" />
                    </Form.Group>     
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control 
                            name="name" 
                            ref={ emailRef } 
                            placeholder="Enter last name" />
                    </Form.Group>        
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
                Create profile
                </Button>    
                <p className="logging-in">Or</p>
                <div>
                    <Button className="w-100 btn-signup"><Link to="/signin">Sign In</Link></Button>
                </div>           
            </StyledForm>
        </div>
    </Container>
    )
}

export default SignUp;