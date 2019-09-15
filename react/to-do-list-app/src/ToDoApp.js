import React from 'react';

import ToDoItem from './components/ToDoItem'

class ToDoApp extends React.Component {
  state = {
    todos: [
      {id: 1, text: "Take out trash and recycling", complete: true},
      {id: 2, text: "Pick up dry cleaning", complete: false},
      {id: 3, text: "Get oil change", complete: false},
      {id: 4, text: "Write thank-you notes", complete: false},
    ]
  }

  handleChange = (e, key) => {
    this.setCompletebyId(key)
  }

  setCompletebyId = (key) => {
    const { todos } = this.state;
    const index = key - 1;
    const complete = todos[index].complete;
    console.log("complete is: ", complete)
    todos[index].complete = !complete;
    this.setState({
      todos
    })
  }

  findRemainingCount = () => {
    const { todos } = this.state;
    const incompleteItemsList = todos.filter(todo => todo.complete === false);
    const count = incompleteItemsList.length;
    return count;
  }

  handleKeyDown = (e) => {
    if(e.keyCode === 13){
      const value = e.target.value;
      const newTodo = this.createNewTodo(value)
      this.addNewTodotoTodosinState(newTodo)
      this.refs.inputTextBox.value = '';
    }
  }

  createNewTodo = (value) => {
    const { todos } = this.state;
    const newTodoId = (todos[(todos.length - 1)].id + 1);
    const newTodo = {
      id: newTodoId,
      text: value,
      complete: false
    };
    return newTodo;
  }

  addNewTodotoTodosinState = (newTodo) => {
    const { todos } = this.state;
    todos.push(newTodo);
    console.log("newTodo is: ", newTodo);
    console.log("todos is: ", todos);
    this.setState({
      todos
    });
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
        <input type="text" ref="inputTextBox" onKeyUp={e => this.handleKeyDown(e)} placeholder="New todo"/>
        <p><span id="remaining-count">{this.findRemainingCount()}</span> items remain</p>
      </div>
    );
  }
}

export default ToDoApp;
