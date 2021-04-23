import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseIndex';
import { Form, Button, Container } from 'react-bootstrap';
import AdminDanceList from './AdminDanceList';

const Admin = () => {
    const [classes, setClasses] = useState([]);
    const [name, setName] = useState("");
    const [instructor, setInstructor] = useState("");
    const [message, setMessage] = useState("")
    const [sun, setSun] = useState(false);
    const [mon, setMon] = useState(false);
    const [tue, setTue] = useState(false);
    const [wed, setWed] = useState(false);
    const [thu, setThu] = useState(false);
    const [fri, setFri] = useState(false);
    const [sat, setSat] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const ref = db.collection('classes').onSnapshot(snapshot => {
            let classesArray = [];
            snapshot.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                classesArray.push(data);
            });
            setClasses(classesArray);
          }, err => {
            console.log(`Encountered error: ${err}`);
          });
          return ref;
      }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

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
            return setMessage('Schedule is updated!')
            // setLoading(false)
        }).catch(error => {
            alert((error.message))
            setLoading(false);
        });
    }

    return (
        <Container>
            <h1 style={{marginTop: "2rem", marginBottom: "2rem"}}>Update Schedule</h1>
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
            <div className="success-msg" style={{background : message ? "rgb(73, 136, 73)" : "transparent"}}>{message}</div>
            <div>
                <AdminDanceList classes={classes}/>
            </div>
        </Container>
    )
}

export default Admin;