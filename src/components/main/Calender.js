import React, { useState, useCallback, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import DanceList from './DanceList';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();

const Calendar = () => {
    const [firstDate, setFirstDate] = useState(new Date(date.getFullYear(), date.getMonth(), 1));

    const weekDay = firstDate.getDay();

    (console.log(weekDay))

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
            <Button style={{background: "transparent", border: "transparent"}} onClick={handlePrevClick}><FaChevronLeft style={{color: "indigo"}} /></Button>           
            <div>
                <h1>{months[firstDate.getMonth()]} {firstDate.getFullYear()}</h1>
            </div>
            <Button style={{background: "transparent", border: "transparent"}} onClick={handleNextClick}><FaChevronRight style={{color: "indigo"}} /></Button>
        </div>
        <div className="calendar">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>

            {[...Array(weekDay)].map(() => (
                <div></div>
            ))}
            
            {[...Array(lastDate.getDate())].map((a, i) => (
                <div class="days" key={i}>{i + 1}</div>
            ))}
        </div>

        <DanceList />
      </>
      
    );
  }
    
  export default Calendar;