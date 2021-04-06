import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from  '../../firebase/firebaseIndex';
import { ListGroup, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';

const UserProfile = () => {
    const user = useContext(AuthContext)

    const handleClick = () => {
      auth.signOut()
    }
    return (
        <>
            <h1>Cart</h1>
            <p>{`${user && user.email} |`}</p>
            <Link to="/signin" style={{color: "purple"}} onClick={handleClick}>Sign out</Link>
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