import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.handleInput}
      />
      <button onClick={props.clickTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
