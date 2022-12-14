import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStopwatch } from 'react-timer-hook';

import './css/timer.css'

function Timer() {
  
  const [tasks, setTasks] = useState([]);
  const [timer, setTimer] = useState(null)

  useEffect(() => { getTasks() }, []);

  const handleTimer = e => {
    setTimer(e.target.value);
    console.log('value is:', e.target.value);
  }

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
  } = useStopwatch({ autoStart: false });

  function getTasks () {
    axios.get("http://localhost:3001/tasks").then(res => setTasks(res.data)).catch(error => console.warn(error));
  }


  /* const sortDate = tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  const mapDate = tasks.map(() =>
    <ul>
      <li>{sortDate}</li>
    </ul>
  ); */

 /*  const mapTasks = tasks.map((task) => 
  <div className="map-tasks" key={task.id}>
    <div className="timer-obj">
      <h2>{task.name}</h2>
      <p>Time: {task.timer}</p>
    </div>

    <div className="timer-btn-div">
      <button className="timer-btn" onClick={start}>Start</button>
      <button className="timer-btn" onClick={pause}>Pause</button>
    </div>
  </div>
  ) */

  return (

    <div>
      <h1 className="timer-h1">Timer</h1>
    <div className="timer-container">
      <div className="time-div">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div >
      <p className="timer-p">{isRunning ? 'Running' : 'Not running'}</p>
    </div>

    {/* <div>{mapDate}</div> */}

    {/* <div>{mapTasks}</div> */}
    </div>
  );
}

export default Timer;