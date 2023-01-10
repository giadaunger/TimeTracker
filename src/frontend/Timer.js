import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleTask from './SingleTask';

import './css/timer.css'

function Timer() {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => { getTasks() }, []);

  function getTasks () {
    axios.get("http://localhost:3001/tasks").then(res => setTasks(res.data)).catch(error => console.warn(error));
  }


  const sortDate = tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  const mapDate = sortDate.map((task) => 
    <SingleTask task={task}/>
  );

  return (

    <div>
      <h1 className="timer-h1">Timer</h1>
      <div>{mapDate}</div>
    </div>
  );
}

export default Timer;