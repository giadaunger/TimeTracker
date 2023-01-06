import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './css/calender.css'

function Calender() {

  useEffect(() => { getTasks() }, []);

  const [value, onChange] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [selectDate, setSelectDate] = useState("");

  

  function getTasks () {
    axios.get("http://localhost:3001/tasks").then(res => setTasks(res.data)).catch(error => console.warn(error));
  }

  function handleDateChange (task) {
    onChange()
    /* const day = value.getDate();
    const month = value.getMonth();
    const year = value.getFullYear(); */

    // setSelectDate(`${year}-${month}-${day}`)

    console.log(task)
  }

  console.log(value)
  const todaysTask = tasks.filter(findTask => findTask.date === selectDate)


  return (
    <div className="calender">
      <h1 className="calender-h1">Calender</h1>
      <Calendar className="calender-obj" onChange={handleDateChange} value={value} />
       {todaysTask?.map(task => task.name)}
    </div>
  );
}

export default Calender;