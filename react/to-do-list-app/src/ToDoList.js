import React from 'react';

import {todos} from './data.js'

class ToDoList extends React.Component {
  state = {
    checked: ''
  }

  updateCheckboxState = async (taskId) => {
    await this.setState({checked: !this.state.checked});
    console.log("checked is: ", this.state.checked)
    console.log("task.id is: ", taskId)
  }

  updateClassNameState = () => {
    const{checked} = this.state;
    checked ? this.setState({className: 'todo'}) : this.setState({className: 'todo complete'});
  }
  handleCheckboxClick = () => {
    this.updateCheckboxState()
    this.updateClassNameState()
  }

  determineClassName = (taskId, taskComplete) => {
    console.log("taskComplete is: ", taskComplete)
    let className = taskComplete ? 'todo complete' : 'todo';
    return className
  }

  render() {
    // const{checked} = this.state;
    return (
      <div className="app">
        <h1>Things to do</h1>
        <div
        id="main-todo-list"
        className="todo-list"
        >
          {todos.map(task => {
            let className = this.determineClassName(task.id, task.complete)
            return (
              <div key={task.id} className={className}>
              {task.id}
                <input
                type="checkbox"
                className="todo-checkbox"
                onChange={() => this.handleCheckboxClick(task.id)}
                defaultChecked={task.complete}
                />
                <span
                className='todo-text'>
                {task.text}
                </span>
              </div>
              )
            }
          )}
        </div>
        <input type="text" placeholder="New todo"/>
        <p><span id="remaining-count">{todos.length}</span> items remain</p>
      </div>
    )
  }

}

export default ToDoList;
