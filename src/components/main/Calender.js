import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { db } from '../../firebase/firebaseIndex';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import DanceList from './DanceList';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const initialDate = new Date();

const Calendar = () => {
    const [firstDate, setFirstDate] = useState(new Date(initialDate.getFullYear(), initialDate.getMonth()));
    const [classes, setClasses] = useState([]);
    const [classesToShow, setClassesToShow] = useState([]);
    const [selectedDate, setSelectedDate] = useState();

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
        const prevDate = new Date(firstDate.getFullYear(), firstDate.getMonth() - 1);
        setFirstDate(prevDate);
    }, [firstDate])

    const handleNextClick = useCallback(() => {
        const nextDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1);
        setFirstDate(nextDate);
    }, [firstDate])

    const handleClick = useCallback((e) => {
        const day = e.target.dataset.day;
        const year = firstDate.getFullYear();
        const month = firstDate.getMonth();
        const date = new Date(year, month, day);
        const weekday = weekdays[date.getDay()];
        
        //console.log(date.valueOf(), date.getTime())
        setSelectedDate(date);
        
        setClassesToShow(classes.filter(cls => {
            if (cls[weekday] && date >= cls.startDate.toDate() && date <= cls.endDate.toDate()) {
                return true;
            } else {
                return false;
            }
        }))
    }, [firstDate, classes])
    
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

            {[...Array(weekDay)].map((_, i) => (
                <div key={i}></div>
            ))}
            
            {[...Array(lastDate.getDate())].map((_, i) => (
                <div
                    key={i + 7} 
                    className="days"
                    style={{border: selectedDate?.getDate() === i + 1 ? "1px solid indigo" : "none"}}
                    data-day={i + 1} 
                    onClick={handleClick}>
                    {i + 1}
                </div>
            ))}
        </div>
        <div>
            <DanceList classes={classesToShow} selectedDate={selectedDate} />
        </div>
      </>
      
    );
  }
    
  export default Calendar;