import React, { useState } from 'react';
import { ListGroup, Button, Modal, Form, Toast } from 'react-bootstrap';
import { db, FieldValue } from '../../firebase/firebaseIndex';
import { useAuthContext } from '../../contexts/AuthContext';
import CourseCard from './CourseCard';

const DanceList = ({ classes, selectedDate }) => {
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
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
        setShowToast(true)
        setShowModal(false);
    }

    const BookButton = ({ cls }) => {
        if (userInfo && userInfo.role === 'admin') return null
        if (user) return (
            <Button
                onClick={() => handleModal(cls)}
                style={{ marginTop: "1rem" }}>Book</Button>
        )
        return (
            <Button onClick={signin}>Sign in to book</Button>
        )
    }

    const toggleShowToast = () => setShowToast(!showToast);

    return selectedDate ? (
        <>
            <Toast
                show={showToast}
                onClose={toggleShowToast}
                style={{marginTop: "2rem"}}
               >
                <Toast.Header style={{ backgroundColor: "green", color: "white"}}>
                    <strong className="mr-auto">Booking complete!</strong>
                </Toast.Header>
            </Toast>
            <ListGroup>
                <ListGroup.Item
                    style={{
                        textAlign: "center",
                        margin: "2rem 5rem 0 5rem"
                    }}>
                    {selectedDate.toDateString()}
                </ListGroup.Item>
                <div
                    className="cards-flex"
                    style={{
                        display: "flex",
                        margin: "0 4rem 0 4rem"
                    }}>
                    {classes.length === 0 ? <ListGroup.Item variant="light">
                        Sorry, no classes available
                    </ListGroup.Item> : null}
                    {classes.map(cls => (
                        <CourseCard key={cls.id} cls={cls}>
                            <BookButton cls={cls} />
                        </CourseCard>
                    )
                    )}
                </div>
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
