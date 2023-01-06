import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

import 'react-tabs/style/react-tabs.css';
import './css/dashboard.css'

function Dashboard() {

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

  function deleteTask (id) {
    axios.delete(`http://localhost:3001/tasks/${id}`).then(res => console.log(res.data)).catch(error => console.warn(error));
  }
  
  function createNewTask() {
    navigate("/addTask")
  }

  function createNewProject() {
    navigate("/addProject")
  }

  function handleDeleteClick(id) {
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = tasks.filter((task) => {
      // return the rest of the todos that don't match the item we are deleting
      return task.id !== id;
    });
    // removeItem returns a new array - so now we are setting the todos to the new array
    setTasks(removeItem);
    deleteTask(id);
    console.log(id);
  }

  const mapTasks = tasks.map((task) => 
  <div className="map-tasks" key={task.id}>
    <div className="task-obj">
      <h2>{task.name}</h2>
      <p>Projekt: {task.projectName}</p>
      <p>Time: {task.timer}</p>
      <p>Date: {task.date}</p>
    </div>

    <div className="editDelete-div">
      <button className="editDelete-btn" onClick={() => handleDeleteClick(task.id)}>Delete</button>
    </div>
  </div>
  )

  const mapProjects = projects.map((project) => 
  <div className="map-projects" key={project.id}>
    <div className="project-obj">
      <h2>{project.name}</h2>
    </div>

    <div className="editDelete-div">
      <button className="editDelete-btn" >Delete</button>
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