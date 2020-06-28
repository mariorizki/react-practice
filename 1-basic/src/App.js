import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age={28} />
        <Person name="Manu" age={31}>
          My hobbies: Reading
        </Person>
        <Person name="Maudy" age={26} />
      </div>
    );
  }
}

export default App;
