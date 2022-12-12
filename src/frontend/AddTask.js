import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import "./css/taskAndProject.css"

function AddTask() {

  const unique_id = uuid();
  const [taskName, setTaskName] = useState('');
  const [projectId, setProjectId] = useState('');
  const [date, setDate] = useState('');
  const [projects, setProjects] = useState([]);

  const mapProjects = projects.map((project) => 
  <div className="map-projects" key={project.id}>
    <select id="projectId" name="projectId" form="projectId" value={projectId}>
      <option value="project.id">{project.name}</option>
    </select>
  </div>
  )

  function submitTask() {
    const task = {
      id : unique_id,
      name: taskName,
      projectId : projectId,
      timer : null,
      date : date
    }

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
            <input className="project-input" type="text" /><br />

            <label className="project-label">Select project</label><br />
            <div>{mapProjects}</div>

            <label>Date:</label><br />
            <input type="date" id="date" name="date" value={date}/><br />

            <button onClick={submitTask}>Save</button>
        </div>
    </div>
  );
}

export default AddTask;