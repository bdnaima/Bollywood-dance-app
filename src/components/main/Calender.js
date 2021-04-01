import React, { useState } from 'react';

const Calendar = () => {
    const [days, setDays] = useState([]);
    const date = new Date();
    const numOfDays = 31;
    const month = date.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const handlePrevClick = () => {
        
        setDays(date.getMonth() - 1)

        console.log(days);
    }

    const handleNextClick = () => {
        setDays(date.getMonth() + 1)

        console.log(days);
    }
    
    return (
      <>
                 <div className="month">
                <button onClick={handlePrevClick}>Prev</button>
                <div className="date">
                    <h1>{months[month]}</h1>
                </div>
                <button onClick={handleNextClick}>Next</button>
            </div>
        <div id="calendar" className="grid-container">
            <div className="weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div> 
            <div className="days">
                {[...Array(numOfDays)].map((a, i) => (
                    <div key={i}>{i + 1}</div>
                ))}
            </div>
        </div>
      </>
      
    );
  }
    
  export default Calendar;