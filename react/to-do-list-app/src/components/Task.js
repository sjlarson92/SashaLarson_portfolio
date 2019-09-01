import React from 'react';

class Task extends React.Component {
  state = {
    className: 'todo',
    checked: false
  }

  updateCheckboxState = async () => {
    await this.setState({checked: !this.state.checked});
    console.log("checked is : ", this.state.checked)
  }

  updateClassNameState = () => {
    const{checked} = this.state;
    checked ? this.setState({className: 'todo'}) : this.setState({className: 'todo complete'});
  }
  handleCheckboxClick = () => {
    this.updateCheckboxState()
    this.updateClassNameState()
  }

  render (){
    const{className, checked} = this.state;
    return (
      <div className={className}>
        <input
        type="checkbox"
        className="todo-checkbox"
        onChange={this.handleCheckboxClick}
        defaultChecked={checked}
        />
        <span
        className='todo-text'>
        {this.props.task.text}
        </span>
      </div>
    )
  }
}

export default Task;
