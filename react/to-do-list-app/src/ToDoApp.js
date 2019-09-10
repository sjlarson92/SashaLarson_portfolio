import React from 'react';

import ToDoItem from './components/ToDoItem'

class ToDoApp extends React.Component {
  state = {
    todos: [
      {id: 1, text: "Take out trash and recycling", complete: false},
      {id: 2, text: "Pick up dry cleaning", complete: true},
      {id: 3, text: "Get oil change", complete: false},
      {id: 4, text: "Write thank-you notes", complete: false},
    ]
  }

  handleChange = (e, key) => {
  const isComplete = e.target.checked;
  this.setCompletebyId(isComplete, key)
}

  setCompletebyId = (isComplete, key) => {
    const { todos } = this.state;
    todos.map(todo => {
      if (todo.id === key){
        console.log("current todo: ", todo.text);
        console.log("isComplete: ", isComplete);

        //TODO: setstate todo.complete == isComplete
      }
    })
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
        {todos.map(todo =>
          <ToDoItem
            key={todo.id}
            todo={todo}
            handleChange={e => this.handleChange(e, todo.id)}
          />)}
        </div>
        <input type="text" placeholder="New todo"/>
        <p><span id="remaining-count">{todos.length}</span> items remain</p>
      </div>
    );
  }
}

export default ToDoApp;
