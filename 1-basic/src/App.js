import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 31 },
      { name: 'Maudy', age: 26 }
    ]
  };
  render() {
    const { person } = this.state;

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <Person name={person[0].name} age={person[0].age} />
        <Person name={person[1].name} age={person[1].age}>
          My hobbies: Reading
        </Person>
        <Person name={person[2].name} age={person[2].age} />
      </div>
    );
  }
}

export default App;
