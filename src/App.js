import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    };
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* Pass 'Maximilian' as a parameter to switchNameHandler */}
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

        {/* Render Person components */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maxin')} // Bind switchNameHandler with 'Maximilian' as parameter
        >
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
      </div>
    );
  }
}
  


export default App;
