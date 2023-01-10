import React from "react";
import { useStopwatch } from 'react-timer-hook';
import axios from 'axios';


function SingleTask ({task}) {

    let date = new Date();
    date.setMinutes(16);
    date.setHours(3);

    function setTimerInSeconds() {
      let startingTime = 0;
      if(task.timer) {
        startingTime = task.timer.seconds;
        if(task.timer.minutes > 0) {
          startingTime += task.timer.minutes * 60;
        }
        if(task.timer.hours > 0) {
          startingTime += task.timer.hours * 60 * 60;
        }
        console.log(startingTime)
      }
      return startingTime;
    }

    let offsetTimer = new Date();
    offsetTimer.setSeconds(offsetTimer.getSeconds() + setTimerInSeconds());

    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        reset,
      } = useStopwatch({ autoStart: false, offsetTimestamp : offsetTimer });


      function saveTime () {
        pause()
        const newTime = {hours, minutes, seconds}
        task.timer = newTime;
        console.log(task)

        const headers = {"Content-Type" : "application/json"}
        axios.put(`http://localhost:3001/tasks/${task.id}`, task, {
        headers: {
        'content-type': 'application/json'
      }})
  }

  function resetTime () {
    reset()
    pause()
    task.timer = null;

    const headers = {"Content-Type" : "application/json"}
        axios.put(`http://localhost:3001/tasks/${task.id}`, task, {
        headers: {
        'content-type': 'application/json'
      }})
  }

    return(
        <div className="map-tasks" key={task.id}>
    <div className="timer-obj">
      <h2>{task.name}</h2>
    </div>

    <div className="timer-container">
      <div className="time-div">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div >
      <p className="timer-p">{isRunning ? 'Running' : 'Not running'}</p>
    </div>

    <div className="timer-btn-div">
      <button className="timer-btn" onClick={start}>Start</button>
      <button className="timer-btn" onClick={saveTime}>Pause</button>
      <button className="timer-btn" onClick={resetTime}>Reset</button>
    </div>

    </div>
    )
}

export default SingleTask;