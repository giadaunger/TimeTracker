import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

import 'react-tabs/style/react-tabs.css';
import './css/dashboard.css'

function Dashboard(project) {


  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    getProjects()
    getTasks() 
  }, []);

  function getProjects () {
   axios.get("http://localhost:3001/projects").then(res => setProjects(res.data)).catch(error => console.warn(error));
  }

  function getTasks () {
    axios.get("http://localhost:3001/tasks").then(res => setTasks(res.data)).catch(error => console.warn(error));
  }
  
  function createNewTask() {
    navigate("/addTask")
  }

  function createNewProject() {
    navigate("/addProject")
  }

  const mapTasks = tasks.map((task) => 
  <div className="map-tasks" key={task.id}>
    <div className="task-obj">
      <h2>{task.name}</h2>
      <p>Projekt: {task.projectId}</p>
      <p>Time: {task.timer}</p>
    </div>

    <div className="editDelete-div">
      <button className="editDelete-btn">Delete</button>
      <button className="editDelete-btn">Edit</button>
    </div>
  </div>
  )

  const mapProjects = projects.map((project) => 
  <div className="map-projects" key={project.id}>
    <div className="project-obj">
      <h2>{project.name}</h2>
    </div>

    <div className="editDelete-div">
      <button className="editDelete-btn">Delete</button>
      <button className="editDelete-btn">Edit</button>
    </div>
  </div>
  )


  return (
    <div>
      <h1 className="dashboard-h1">Dashboard</h1>

      <Tabs>
        <TabList>
          <Tab>Projects</Tab>
          <Tab>Tasks</Tab>
        </TabList>
        
        <TabPanel>
          <div>{mapProjects}</div>
          <button className="dashboard-btn" onClick={createNewProject}>+</button>
        </TabPanel>

        <TabPanel>
          <div>{mapTasks}</div>
          <button className="dashboard-btn" onClick={createNewTask}>+</button>
        </TabPanel>
      </Tabs>


    </div>
  );
}

export default Dashboard;