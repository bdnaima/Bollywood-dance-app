import React from 'react'
import { ListGroup, Button } from 'react-bootstrap';

const DanceList = ({ classes }) => {
    return (
        <>
            <div>
                
            </div>
            <ListGroup>
                <ListGroup.Item>
                    <p style={{fontSize: "21px"}}>Tuesday, April 6</p>
                </ListGroup.Item>

                {classes.map(cls => {
                    return (<ListGroup.Item key={cls.id}>
                                <h4>{cls.name}</h4>
                                <h6>{cls.instructor}</h6>
                                <Button>Book</Button>
                            </ListGroup.Item>)
                })}
                
            </ListGroup>
        </>
    )
}

export default DanceList;
