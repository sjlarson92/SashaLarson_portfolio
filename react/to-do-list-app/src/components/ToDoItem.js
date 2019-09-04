import React from 'react';

class ToDoItem extends React.Component {
  state = {
  }

  determineClassName = (complete) => {
    const className = complete ? 'todo complete' : 'todo';
    console.log("className is: ", className)
    return className
  }

  updateCheckboxState = async (checkBoxValue) => {
    await this.setState({checkBoxValue: !checkBoxValue});
    console.log("initial checkBoxValue is: ", checkBoxValue)
    console.log("checkBoxValue is: ", this.state.checkBoxValue)
  }

  updateClassNameState = () => {
    const{checked} = this.state;
    checked ? this.setState({className: 'todo'}) : this.setState({className: 'todo complete'});
  }
  handleCheckboxClick = (complete) => {
    this.updateCheckboxState(complete)
    this.updateClassNameState()
  }

  render(){
    const {task} = this.props;
    const className = this.determineClassName(task.complete)
    return (
      <div
      className={className}
      >
        <input
          type="checkbox"
          className="todo-checkbox"
          defaultChecked={task.complete}
          onChange={() => this.handleCheckboxClick(task.complete)}
        />
        <span
          className='todo-text'>
          {task.text}
        </span>
      </div>
    )
  }
}

export default ToDoItem;
