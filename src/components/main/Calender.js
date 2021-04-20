import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { db } from '../../firebase/firebaseIndex';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import DanceList from './DanceList';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();

const Calendar = () => {
    const [firstDate, setFirstDate] = useState(new Date(date.getFullYear(), date.getMonth(), 1));
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

    const weekDay = firstDate.getDay();

    const lastDate = useMemo(() => {
        return new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0)
    }, [firstDate])

    const handlePrevClick = useCallback(() => {
        const prevDate = new Date(firstDate.getFullYear(), firstDate.getMonth() - 1, 1);
        setFirstDate(prevDate);
    }, [firstDate])

    const handleNextClick = useCallback(() => {
        const nextDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 1);
        setFirstDate(nextDate);
    }, [firstDate])
    
    return (
      <>
        <div className="month">
            <Button style={{background: "transparent", border: "transparent"}} onClick={handlePrevClick}><FaChevronLeft /></Button>           
            <div>
                <h1>{months[firstDate.getMonth()]} {firstDate.getFullYear()}</h1>
            </div>
            <Button style={{background: "transparent", border: "transparent"}} onClick={handleNextClick}><FaChevronRight /></Button>
        </div>
        <div className="calendar">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>

            {[...Array(weekDay)].map((a, i) => (
                <div key={i}></div>
            ))}
            
            {[...Array(lastDate.getDate())].map((a, i) => (
                <div className="days" key={i + 7}>{i + 1}</div>
            ))}
        </div>
        <div>
            {classes && <DanceList classes={classes} />}
        </div>
      </>
      
    );
  }
    
  export default Calendar;