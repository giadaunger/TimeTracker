import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import "./css/taskAndProject.css"

function AddTask() {

  const unique_id = uuid();
  const [taskName, setTaskName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [date, setDate] = useState('');
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  
  const mapProjects = projects.map((project) => 
    <option key={project.id}>{project.name}</option>
  )

  useEffect(() => {  getProjects() }, []);

  function getProjects () {
    axios.get("http://localhost:3001/projects").then(res => setProjects(res.data)).catch(error => console.warn(error));
  }

  function BackToDashboard() {
    navigate("/")
  }

  const handleTaskName = e => {
    setTaskName(e.target.value);
    console.log('value is:', e.target.value);
  }

  const handleTaskDate = e => {
    setDate(e.target.value);
    console.log('value is:', e.target.value);
  }

  const handleProjectName = e => {
    setProjectName(e.target.value);
    console.log('value is:', e.target.value);
  }

  function submitTask() {
    const task = {
      id : unique_id,
      name: taskName,
      projectName : projectName,
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
              name="projectName"
              onChange={handleProjectName}
              value={projectName}
              >
                <option>--</option>
                {mapProjects}
              </select><br />

            <label className="project-label">Date:</label><br />
            <input 
              type="date" 
              name="date" 
              placeholder="dd-mm-yyyy" 
              onChange={handleTaskDate}
              value={date}
            /><br />

            <button onClick={() => {
              submitTask();
              BackToDashboard();
            }}>Save</button>
        </div>
    </div>
  );
}

export default AddTask;