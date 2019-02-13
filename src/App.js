import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      inputText: ''
    };
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  handlerAddTodo = event => {
    event.preventDefault();

    if (this.state.inputText)
      this.setState({
        todos: [
          ...this.state.todos,
          {
            task: this.state.inputText,
            id: Math.random(10),
            completed: false
          }
        ],
        inputText: ''
      });
  };
  render() {
    return (
      <div className="todo-app center container">
        <h2>Welcome to your Todo App!</h2>

        <TodoList todos={this.state.todos} />
        <TodoForm
          clickTodo={this.handlerAddTodo}
          inputValue={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
