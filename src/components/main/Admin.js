import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseIndex';
import AdminDanceList from './AdminDanceList';

const Admin = () => {
    const [classes, setClasses] = useState([]);

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
            <AdminDanceList classes={classes}/>
        </>
    )
}

export default Admin;