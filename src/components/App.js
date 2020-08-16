import React, { Component } from 'react';
import Todo from './Todo';
import TodoList from './TodoList';


class App extends Component {
  constructor() {
    super();
    const Todos = [{
      id: 1,
      title: "test1",
      content: "content1"
    },
    {
      id: 2,
      title: "test2",
      content: "content2"
    }
    ]
    this.state = {
      todos: Todos,
      count: Todos.length + 1
    };
  };
  updateState(state) {
    let todos = this.state.todos;
    todos.push({ id: this.state.count, title: state.title, content: state.content })
    this.setState({ todos: todos, count: todos.length + 1 })
  }
  // 表示されるHTMLを記述
  render() {
    { console.log(this.state.todos) }
    return (
      <div className="App">
        <Todo updateState={this.updateState.bind(this)} />
        <TodoList
          todos={this.state.todos}
        />
      </div>
    )
  }
}

export default App;