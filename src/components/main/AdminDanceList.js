import React, { useState } from 'react';
import { ListGroup, Button, Modal, Form, Toast } from 'react-bootstrap';
import { db } from '../../firebase/firebaseIndex';
import { Trash } from 'react-bootstrap-icons';

const AdminDanceList = ({ classes}) => {
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [name, setName] = useState("");
    const [instructor, setInstructor] = useState("");
    const [sun, setSun] = useState(false);
    const [mon, setMon] = useState(false);
    const [tue, setTue] = useState(false);
    const [wed, setWed] = useState(false);
    const [thu, setThu] = useState(false);
    const [fri, setFri] = useState(false);
    const [sat, setSat] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoading(true);

        const cls = {
            name,
            instructor,
            sun,
            mon,
            tue,
            wed,
            thu,
            fri,
            sat
        }

        db.collection('classes').add(cls).then(() => {
            setShowToast(true)
            // setLoading(false)
        }).catch(error => {
            alert((error.message))
            // setLoading(false);
        });
        setShowModal(false);
    }

    const toggleShowToast = () => setShowToast(!showToast);

    const handleDelete = (id) => {
        db.collection('classes').doc(id).delete();
    }
    return (
        <>
            <Toast show={showToast} onClose={toggleShowToast} animation={false} style={{backgroundColor:"limegreen"}}>
                <Toast.Header>
                    <strong className="mr-auto">Dance class added!</strong>
                </Toast.Header>
            </Toast>
            <ListGroup>
                <ListGroup.Item>
                    <h2>Dance classes</h2>
                    <Button onClick={handleModal}>Add</Button>
                </ListGroup.Item>

                {classes.map(cls => {
                    return (<ListGroup.Item key={cls.id}>
                                <h4>{cls.name}</h4>
                                <h6>{cls.instructor}</h6>
                                <Button onClick={() => handleDelete(cls.id)}><Trash /></Button>
                            </ListGroup.Item>)
                })}
                
            </ListGroup>
            <Modal 
                show={showModal} 
                onHide={handleClose} 
                animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Schedule</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <h3>Dance</h3>
                        <Form.Control placeholder="Enter class name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <h3>Instructor</h3>
                        <Form.Control placeholder="Enter insturctor" value={instructor} onChange={(e) => setInstructor(e.target.value)}/>
                    </Form.Group>

                    <h4>Select Weekdays</h4>
                    <Form.Group className="check-weekdays">
                        
                        <Form.Check type="checkbox" label="Sun" value={sun} onChange={e => setSun(e.target.checked)}/>
                        <Form.Check type="checkbox" label="Mon" value={mon} onChange={e => setMon(e.target.checked)}/>
                        <Form.Check type="checkbox" label="Tue" value={tue} onChange={e => setTue(e.target.checked)}/>
                        <Form.Check type="checkbox" label="Wed" value={wed} onChange={e => setWed(e.target.checked)}/>
                        <Form.Check type="checkbox" label="Thu" value={thu} onChange={e => setThu(e.target.checked)}/>
                        <Form.Check type="checkbox" label="Fri" value={fri} onChange={e => setFri(e.target.checked)}/>
                        <Form.Check type="checkbox" label="Sat" value={sat} onChange={e => setSat(e.target.checked)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Add</Button>
                    </Form> 
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AdminDanceList;