import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <h5
      className={props.todo.completed ? 'crossOut' : null}
      onClick={() => props.toggleComment(props.todo.id)}
    >
      {props.todo.task}{' '}
    </h5>
  );
};

export default Todo;
