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


 
 togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
 }
 

 deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
 }
  render() {
   const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
   }

  let  persons = null;

  if(this.state.showPersons){
    persons = (
      <div>
      {this.state.persons.map((person, index )=> {
        return <Person 
        click= {() => this.deletePersonHandler(index)}
        name= {person.name} 
        age= {person.age}

        />
      })}
      </div> 
    );
    }
  


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* Pass 'Maximilian' as a parameter to switchNameHandler */}
        <button 
        style = {style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        {/* Render Person components */}

      </div>
    );
  }n
}
  


export default App;
