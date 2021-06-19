import React, { useState } from 'react';
import { ListGroup, Button, Modal, Form, Toast } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import  background from '../../assets/images/purple.jpg';

import { db } from '../../firebase/firebaseIndex';
import CourseCard from './CourseCard';
import { useAuthContext } from '../../contexts/AuthContext';

const AdminDanceList = ({ classes }) => {
    const { userInfo } = useAuthContext();
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [name, setName] = useState("");
    const [instructor, setInstructor] = useState("");
    const [startTime, setStartTime] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [duration, setDuration] = useState();
    const [maxStudents, setMaxStudents] = useState();
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
            startTime,
            startDate,
            endDate,
            duration,
            students: [],
            maxStudents,
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
        }).catch(error => {
            alert((error.message))
        });
        setShowModal(false);
    }

    const toggleShowToast = () => setShowToast(!showToast);

    const handleDelete = (id) => {
        db.collection('classes').doc(id).delete();
    }

    const validWeekday = sun || mon || tue || wed || thu || fri || sat
    const valid = validWeekday
    return (
        <>
            <Toast
                show={showToast}
                onClose={toggleShowToast}
                style={{marginTop: "1rem"}}>
                <Toast.Header style={{ backgroundColor: "green", color: "white" }}>
                    <strong className="mr-auto">Dance class added!</strong>
                </Toast.Header>
            </Toast>
            <ListGroup style={{ backgroundColor: "lightgray" }}>
                <ListGroup.Item
                    style={{
                        textAlign: "center",
                        margin: "2rem 5rem 0 5rem",
                        backgroundImage: `url(${ background })`
                    }}>
                    <h3 style={{color: "white"}}>Dance classes</h3>
                    {userInfo && userInfo.role === "admin" && <Button style={{backgroundColor:"purple"}} onClick={handleModal}>Add</Button>}
                </ListGroup.Item>
                <div
                    className="cards-flex"
                    style={{
                        display: "flex",
                        flexFlow: "wrap",
                        margin: "0 4rem 0 4rem"
                    }}>
                    {classes.map(cls => <CourseCard key={cls.id} cls={cls}>
                        {userInfo && userInfo.role === "admin" && <Button onClick={() => handleDelete(cls.id)}><Trash /></Button>}
                    </CourseCard>)}
                </div>
            </ListGroup>
            <Modal
                show={showModal}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Schedule</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Dance</Form.Label>
                            <Form.Control
                                placeholder="Class name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Instructor</Form.Label>
                            <Form.Control
                                placeholder="Instructor"
                                required
                                value={instructor}
                                onChange={(e) => setInstructor(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Start date</Form.Label>
                            <Form.Control
                                type="date"
                                required
                                onChange={(e) => {
                                    const date = e.target.valueAsDate
                                    date.setHours(0, 0, 0, 0)
                                    setStartDate(date)
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>End date</Form.Label>
                            <Form.Control
                                type="date"
                                required
                                onChange={(e) => {
                                    const date = e.target.valueAsDate
                                    date.setHours(23, 59, 59, 999)
                                    setEndDate(date)
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Start time</Form.Label>
                            <Form.Control
                                type="time"
                                pattern="[0-2][0-9]:[0-5][0-9]"
                                placeholder="hh:mm"
                                required
                                onChange={(e) => { setStartTime(e.target.valueAsNumber) }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Duration</Form.Label>
                            <Form.Control
                                type="number"
                                min="10"
                                max="1440"
                                placeholder="How many minutes?"
                                required
                                onChange={(e) => { setDuration(e.target.valueAsNumber) }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Maximum students</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                required
                                onChange={(e) => setMaxStudents(e.target.valueAsNumber)} />
                        </Form.Group>

                        <Form.Label>Weekdays</Form.Label>
                        <Form.Group>
                            <Form.Check id="sun" type="checkbox" label="Sun" value={sun} onChange={e => setSun(e.target.checked)} />
                            <Form.Check id="mon" type="checkbox" label="Mon" value={mon} onChange={e => setMon(e.target.checked)} />
                            <Form.Check id="tue" type="checkbox" label="Tue" value={tue} onChange={e => setTue(e.target.checked)} />
                            <Form.Check id="wed" type="checkbox" label="Wed" value={wed} onChange={e => setWed(e.target.checked)} />
                            <Form.Check id="thi" type="checkbox" label="Thu" value={thu} onChange={e => setThu(e.target.checked)} />
                            <Form.Check id="fri" type="checkbox" label="Fri" value={fri} onChange={e => setFri(e.target.checked)} />
                            <Form.Check id="sat" type="checkbox" label="Sat" value={sat} onChange={e => setSat(e.target.checked)} />
                        </Form.Group>

                        <Button variant="primary" disabled={valid ? false : true} type="submit">Add</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AdminDanceList;