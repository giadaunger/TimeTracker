import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Calender from './frontend/Calender';
import Timer from './frontend/Timer';
import Dashboard from './frontend/Dashboard';
import Nav from './frontend/Nav';
import AddTask from './frontend/AddTask';
import AddProject from './frontend/AddProject';

function App() {

  return (
    <Router>
      
      <div className="App">
        <Nav />
      </div>

        <Routes>
          <Route path="/calender" element={< Calender />} />
          <Route path="/timer" element={< Timer />} />
          <Route path="/" element={< Dashboard />}/>
          <Route path="/addTask" element={< AddTask />} />
          <Route path="/addProject" element={< AddProject />} />
        </Routes>
    </Router>
  );
}

export default App;
