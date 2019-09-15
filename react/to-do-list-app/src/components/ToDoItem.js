import React from 'react';

class ToDoItem extends React.Component {
  state = {
  }

  getClassName = (complete, isToggleOn) => {
    let className;
    if (isToggleOn){
      complete ? className="todo complete hide" : className="todo";
    }
    else {
      complete ? className="todo complete" : className="todo";
    }
    return className
  }

  render(){
    const {isToggleOn, todo, handleClick} = this.props;
    const className = this.getClassName(todo.complete, isToggleOn)
    return (
      <label
      className={className}
      >
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.complete}
          onChange={handleClick}
        />
        <span
          className='todo-text'>
          {todo.text}
        </span>
        </label>
    )
  }
}

export default ToDoItem;
