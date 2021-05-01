import React from 'react';
import { ListGroup } from 'react-bootstrap';


const CourseCard = ({ cls, children }) => {
    return (
        <ListGroup.Item>
            <h4>{cls.name}</h4>
            <ListGroup.Item>{cls.instructor}</ListGroup.Item>
            <ListGroup.Item>
                {(new Date(cls.startTime)).toLocaleTimeString([], { timeStyle: 'short' })}
            </ListGroup.Item>
            <ListGroup.Item>{(new Date(cls.startDate)).toLocaleDateString()}</ListGroup.Item>
            <ListGroup.Item>{(new Date(cls.endDate)).toLocaleDateString()}</ListGroup.Item>
            <ListGroup.Item>{cls.duration} minutes</ListGroup.Item>
            <ListGroup.Item>Enrolled {cls.students.length} of {cls.maxStudents} students</ListGroup.Item>
            <ListGroup.Item>{cls.students?.join()}</ListGroup.Item>
            {children}
        </ListGroup.Item>)
}

export default CourseCard;