import React from 'react'
import { ListGroup, Button } from 'react-bootstrap';
import { db } from '../../firebase/firebaseIndex';
import { Trash } from 'react-bootstrap-icons';

const AdminDanceList = ({ classes}) => {

    const handleDelete = () => {
       
    }
    return (
        <>
            <div>
                
            </div>
            <ListGroup>
                <ListGroup.Item>
                    <h2>Dance classes</h2>
                </ListGroup.Item>

                {classes.map(cls => {
                    return (<ListGroup.Item key={cls.id}>
                                <h4>{cls.name}</h4>
                                <h6>{cls.instructor}</h6>
                                <Button onClick={handleDelete}><Trash /></Button>
                            </ListGroup.Item>)
                })}
                
            </ListGroup>
        </>
    )
}

export default AdminDanceList;