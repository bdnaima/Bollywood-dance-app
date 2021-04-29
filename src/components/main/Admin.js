import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseIndex';
import { Container } from 'react-bootstrap';
import AdminDanceList from './AdminDanceList';

const Admin = () => {
    const [classes, setClasses] = useState([]);
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

    return (
        <>
        <Container className="admin-container">
            <div>
                <AdminDanceList classes={classes}/>
            </div>
        </Container>
        </>
    )
}

export default Admin;