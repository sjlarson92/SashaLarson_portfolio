import React from 'react';

import ToDoItem from './components/ToDoItem'

class ToDoApp extends React.Component {
  state = {
    checked: '',
    todos: [
      {id: 1, text: "Take out trash and recycling", complete: true},
      {id: 2, text: "Pick up dry cleaning", complete: false},
      {id: 3, text: "Get oil change", complete: false},
      {id: 4, text: "Write thank-you notes", complete: false},
    ]
  }

  render(){
    const { todos } = this.state;
    return (
      <div className="app">
        <h1>Things to do</h1>
        <div
        id="main-todo-list"
        className="todo-list"
        >
        {todos.map(task =>
          <ToDoItem
            key={task.id}
            task={task}
          />)}
        </div>
        <input type="text" placeholder="New todo"/>
        <p><span id="remaining-count">{todos.length}</span> items remain</p>
      </div>
    );
  }
}

export default ToDoApp;
