import React from 'react';
import { useStopwatch } from 'react-timer-hook';

import './css/timer.css'

function Timer() {

    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        reset,
      } = useStopwatch({ autoStart: false });

  return (

    <div>
      <h1 className="timer-h1">Timer</h1>
    <div className="timer-container">
      <div className="time-div">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div >
      <p className="timer-p">{isRunning ? 'Running' : 'Not running'}</p>
      <div className="btn-div">
        <button className="timer-btn" onClick={start}>Start</button>
        <button className="timer-btn" onClick={pause}>Pause</button>
        <button className="timer-btn" onClick={reset}>Reset</button>
      </div>
    </div>
    </div>
  );
}

export default Timer;