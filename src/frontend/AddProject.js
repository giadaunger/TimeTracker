import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/taskAndProject.css';

function AddProject() {

  const unique_id = uuid();
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState('');
  const handleChange = e => {
    setProjectName(e.target.value);
    console.log('value is:', e.target.value);
  }

  function BackToDashboard() {
    navigate("/")
  }

  function submitProject() {
    const project = {
      id : unique_id,
      name: projectName,
  }

    setProjectName('');
  
  const headers = {"Content-Type" : "application/json"}
  axios.post("http://localhost:3001/projects", project, {
    headers: {
      'content-type': 'application/json'
    }})
  }
  
  return (
    <div className="project">

        <h1 className="project-h1">Project</h1>

        <div className="add-project">
            <label className="task-label">Add project:</label>
            <input 
              className="task-input" 
              type="text"  
              placeholder="Project name..." 
              name="projectName"
              onChange={handleChange}
              value={projectName}
              />

            <button onClick={() => {
              submitProject();
              BackToDashboard();
            }
            }>Save</button>
        </div>
    </div>
  );
}

export default AddProject;