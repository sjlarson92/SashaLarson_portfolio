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
    const {todo, handleChange} = this.props;
    const className = this.getClassName(todo.complete)
    return (
      <div
      className={className}
      onClick={handleChange}
      >
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.complete}
        />
        <span
          className='todo-text'>
          {todo.text}
        </span>
      </div>
    )
  }
}

export default ToDoItem;
