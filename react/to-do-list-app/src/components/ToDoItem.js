import React from 'react';

class ToDoItem extends React.Component {
  state = {
  }

  getClassName = (complete) => {
    let className;
    complete ? className="todo complete" : className="todo";
    return className
  }

  render(){
    const {todo, handleClick} = this.props;
    const className = this.getClassName(todo.complete)
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
