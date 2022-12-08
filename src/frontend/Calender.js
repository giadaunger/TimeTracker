import React, { useState }  from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './css/calender.css'

function Calender() {

  const [value, onChange] = useState(new Date());

  return (
    <div className="calender">
      <h1 className="calender-h1">Calender</h1>
      <Calendar className="calender-obj" onChange={onChange} value={value} />
    </div>
  );
}

export default Calender;