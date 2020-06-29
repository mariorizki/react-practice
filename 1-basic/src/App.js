import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 31 },
      { name: 'Maudy', age: 26 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Manu', age: 31 },
        { name: 'Maudy', age: 26 }
      ]
    });
  };

  render() {
    const { persons } = this.state;

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={persons[0].name} age={persons[0].age} />
        <Person name={persons[1].name} age={persons[1].age}>
          My hobbies: Reading
        </Person>
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
  }
}

export default App;
