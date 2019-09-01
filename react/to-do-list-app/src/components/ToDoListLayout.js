import React from 'react';

import Task from './Task.js'

const ToDoListLayout = (props) =>
  <div className="app">
    <h1>{props.header}</h1>
    <div
    id="main-todo-list"
    className="todo-list"
    >
      {props.tasksArray.map(task =>
        <Task
        key={task.id}
        task={task}
        />
      )}
    </div>
  </div>

export default ToDoListLayout;
