import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import "./css/taskAndProject.css"

function AddTask() {

  const unique_id = uuid();
  const [taskName, setTaskName] = useState('');
  const [projectId, setProjectId] = useState('');
  const [date, setDate] = useState('');

  const handleTaskName = e => {
    setTaskName(e.target.value);
    console.log('value is:', e.target.value);
  }

  const handleTaskDate = e => {
    setDate(e.target.value);
    console.log('value is:', e.target.value);
  }

  const handleProjectId = e => {
    setDate(e.target.value);
    console.log('value is:', e.target.value);
  }

  function submitTask() {
    const task = {
      id : unique_id,
      name: taskName,
      projectId : projectId,
      timer : null,
      date : date
    }

  setTaskName('');
  setDate('');

    const headers = {"Content-Type" : "application/json"}
    axios.post("http://localhost:3001/tasks", task, {
      headers: {
      'content-type': 'application/json'
      }})
  }

  return (
    <div className="task">

        <h1 className="task-h1">Task</h1>

        <div className="add-task">

            <label className="project-label">Add task:</label><br />
            <input 
              className="project-input" 
              type="text" id="taskName" 
              name="taskName" 
              onChange={handleTaskName}
              value={taskName} 
              /><br />

            <label className="project-label">Project:</label><br />
            <select 
              form="select"
              name="projectId"
              onChange={handleProjectId}
              value={projectId}>
              </select><br />

            <label className="project-label">Date:</label><br />
            <input 
              type="date" 
              name="date" 
              placeholder="dd-mm-yyyy" 
              onChange={handleTaskDate}
              value={date}
            /><br />

            <button onClick={submitTask}>Save</button>
        </div>
    </div>
  );
}

export default AddTask;