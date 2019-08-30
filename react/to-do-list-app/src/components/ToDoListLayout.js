import React from 'react';

import Task from './Task.js'

const ToDoListLayout = (props) =>
  <div className="app">
    <h1>{props.header}</h1>
    {props.tasksArray.map(task =>
      <Task
      key={task.id}
      task={task}
      />
    )}
  </div>

export default ToDoListLayout;
