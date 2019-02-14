import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Eat Your Wheaties',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Learn React',
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

  toggleComment = id => {
    const newTodo = [...this.state.todos];
    newTodo.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    this.setState(
      {
        todos: newTodo
      },
      () => console.log(this.state)
    );
  };

  deleteComplete = event => {
    event.preventDefault();

    const incomplete = [...this.state.todos].filter(todo => {
      return todo.completed === false;
    });

    this.setState({
      todos: incomplete
    });
  };
  handlerAddTodo = event => {
    event.preventDefault();

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
      <div className=" todo-app center container">
        <h2 className="text-blue">Welcome to your Todo App!</h2>

        <TodoList todos={this.state.todos} toggleComment={this.toggleComment} />

        <TodoForm
          clickTodo={this.handlerAddTodo}
          inputValue={this.state.inputText}
          handleInput={this.handleInput}
          deleteComplete={this.deleteComplete}
        />
      </div>
    );
  }
}

export default App;
