import React from 'react';

import {todos} from './data.js'
import ToDoListLayout from './components/ToDoListLayout.js'

class ToDoList extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <ToDoListLayout
        header="Things To Do:"
        tasksArray={todos}
        />
      </div>
    )
  }

}

export default ToDoList;
