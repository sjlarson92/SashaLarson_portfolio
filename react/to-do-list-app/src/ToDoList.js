import React from 'react';

import {todos} from './data.js'

class ToDoList extends React.Component {
  state = {
    className: 'todo',
    checked: false
  }

  updateCheckboxState = async () => {
    await this.setState({checked: !this.state.checked});
  }

  updateClassNameState = () => {
    const{checked} = this.state;
    checked ? this.setState({className: 'todo'}) : this.setState({className: 'todo complete'});
  }
  handleCheckboxClick = () => {
    this.updateCheckboxState()
    this.updateClassNameState()
  }

  render() {
    const{className, checked} = this.state;
    return (
      <div className="app">
        <h1>Things to do</h1>
        <div
        id="main-todo-list"
        className="todo-list"
        >
          {todos.map(task =>
            <div key={task.id} className={className}>
              <input
              type="checkbox"
              className="todo-checkbox"
              onChange={this.handleCheckboxClick}
              defaultChecked={checked}
              />
              <span
              className='todo-text'>
              {task.text}
              </span>
            </div>
          )}
        </div>
        <input type="text" placeholder="New todo"/>
        <p><span id="remaining-count">{todos.length}</span> items remain</p>
      </div>
    )
  }

}

export default ToDoList;
