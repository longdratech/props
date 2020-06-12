import React, { Component } from 'react';
import './App.css';
import TodoItem from './component/TodoItem';


class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'going play', isComplete: true },
      { title: 'di hoc', isComplete: true},
      { title: 'di lam' }
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} />,
          )
        }
      </div>
    )
  }
}
export default App;