import React, { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './css/calender.css'

function Calender() {


  useEffect(() => { getTasks() }, []);

  const [date, setChangeDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  

  function getTasks () {
    axios.get("http://localhost:3001/tasks").then(res => setTasks(res.data)).catch(error => console.warn(error));
  }

    const day = ("0" + date.getDate().toString()).slice(-2);
    const month = ("0" + (date.getMonth() + 1).toString()).slice(-2);
    const year = date.getFullYear();

    const selectedDate =`${year}-${month}-${day}`

    const todaysTask = tasks.filter(findTask => findTask.date === selectedDate)
    
    


  return (
    <div className="calender">
      <h1 className="calender-h1">Calender</h1>
      <Calendar className="calender-obj" onChange={setChangeDate} value={date} />
       {todaysTask?.map(task => task.name)}
    </div>
  );
}

export default Calender;