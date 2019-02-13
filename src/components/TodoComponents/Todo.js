import React from 'react';

const Todo = props => {
  return <h5 className="blue-text">{props.todo.task}</h5>;
};

export default Todo;
