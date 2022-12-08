import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Calender from './frontend/Calender';
import Task from './frontend/Task';
import Timer from './frontend/Timer';
import Dashboard from './frontend/Dashboard';
import Nav from './frontend/Nav';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path="/calender" element={< Calender />} />
        <Route path="/task" element={< Task />} />
        <Route path="/timeTracker" element={< Timer />} />
        <Route path="/" element={< Dashboard />}/>
      </Routes>

    </Router>
  );
}

export default App;
