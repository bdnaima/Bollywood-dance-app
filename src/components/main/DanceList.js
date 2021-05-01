import React, { useState } from 'react';
import { ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { db, FieldValue } from '../../firebase/firebaseIndex';
import { useAuthContext } from '../../contexts/AuthContext';
import CourseCard from './CourseCard';

const DanceList = ({ classes, selectedDate }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState({});
    const { user, userInfo, signin } = useAuthContext();

    const handleModal = (cls) => {
        setSelectedClass(cls)
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userNameRef = db.collection('classes').doc(selectedClass.id)

        userNameRef.update({
            students: FieldValue.arrayUnion(userInfo.name)
        })
            .catch(error => {
                alert((error.message))
            });
        setShowModal(false);
    }

    const BookButton = ({cls}) => {
        if (userInfo.role === 'admin') return null
        if (user) return (
            <Button
                onClick={() => handleModal(cls)}
                style={{ marginTop: "1rem" }}>Book</Button>
        )
        return (
            <Button onClick={signin}>Sign in to book</Button>
        )
    }

    return selectedDate ? (
        <>
            <ListGroup>
                <ListGroup.Item>
                    {selectedDate.toDateString()}
                </ListGroup.Item>
                {classes.length === 0 ? <ListGroup.Item variant="light">
                    Sorry, no classes available
                </ListGroup.Item> : null}
                {classes.map(cls => (
                    <CourseCard key={cls.id} cls={cls}>
                        <BookButton cls={cls} />
                    </CourseCard>)
                )}
            </ListGroup>

            <Modal
                show={showModal}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm booking</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <h2 style={{ fontSize: "21px" }}>{selectedDate.toDateString()}</h2>
                            <h4>{selectedClass.name}</h4>
                            <p>{selectedClass.instructor}</p>
                            <p>{selectedClass.startTime}</p>
                            <p>{selectedClass.duration} minutes</p>
                        </Form.Group>
                        <Button variant="primary" type="submit">Confirm</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    ) : null
}

export default DanceList;
