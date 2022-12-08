import React from 'react';
import "./css/task.css"

function Task() {

  return (
    <div className="task">

        <h1 className="task-h1">Tasks</h1>

        <div className="add-task">
            <label className="task-label">Add task:</label>
            <input className="task-input" type="text" />
            <input className="task-input" type="submit" />
        </div>
    </div>
  );
}

export default Task;