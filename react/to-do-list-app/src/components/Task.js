import React from 'react';

const Task = (props) =>
  <div id="main-todo-list" className="todo-list">
  <input type="checkbox" className="todo-checkbox" />
  <span className="todo-text">{props.task.text}</span>
  </div>

export default Task;
