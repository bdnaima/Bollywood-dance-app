import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const UserProfile = () => {

    return (
        <>
            <h1>Cart</h1>
            <ListGroup>
                <ListGroup.Item>
                    <p style={{fontSize: "21px"}}>Tuesday, April 6</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>14.00-15.00</p>
                    <p>Bhangra</p>
                    <Button>Book</Button>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default UserProfile;