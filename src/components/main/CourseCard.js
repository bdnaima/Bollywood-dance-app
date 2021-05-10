import React from 'react';
import { ListGroup, Card, } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  max-width: 18rem;
  margin: 1rem;
  box-shadow: 2px 0 3px 3px indigo;
`;

const Span = styled.span`
  font-weight: bold;
`;

const CourseCard = ({ cls, children }) => {
  return (
    <StyledCard style={{ width: '18rem' }}>
      <ListGroup.Item>
        <h4>{cls.name}</h4>
        <ListGroup.Item><Span>Instructor: </Span>{cls.instructor}</ListGroup.Item>
        <ListGroup.Item>
          <Span>Time: </Span>{(new Date(cls.startTime)).toLocaleTimeString([], { timeStyle: 'short' })}
        </ListGroup.Item>
        <ListGroup.Item><Span>Duration: </Span>{cls.duration} minutes</ListGroup.Item>
        <ListGroup.Item><Span>Start: </Span>{cls.startDate.toDate().toLocaleDateString()}</ListGroup.Item>
        <ListGroup.Item><Span>End: </Span>{cls.endDate.toDate().toLocaleDateString()}</ListGroup.Item>
        <ListGroup.Item><Span>Enrolled: </Span> {cls.students.length} of {cls.maxStudents} students</ListGroup.Item>
        <ListGroup.Item><Span>Students: </Span>{cls.students?.join()}</ListGroup.Item>
        {children}
      </ListGroup.Item>
    </StyledCard>)

}

export default CourseCard;