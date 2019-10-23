import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: "13",
        id: 1,
      },
      {
        name: "Kristina",
        age: "16",
        id: 2,
      },
    ],
    isPersonsShown: false,
    inputLength: null,
    inputText: [],
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = this.state.persons;
    persons[personIndex] = person;

    this.setState({
      persons,
    });
  };

  deletePersonsHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      isPersonsShown: !this.state.isPersonsShown,
    });
  };

  lengthHander = event => {
    let inputText = [...this.state.inputText];
    inputText = event.target.value.split("");

    this.setState({
      inputLength: event.target.value.length,
      inputText,
    });
  };

  deleteCharComponentHandler = charIndex => {
    const chars = [...this.state.inputText];
    chars.splice(charIndex, 1);
    this.setState({
      inputText: chars,
    });
  };

  render() {
    let persons = null;
    if (this.state.isPersonsShown) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonsHandler(index)}
                change={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler}> Switch name </button>
        {persons}
        <input
          type="text"
          onChange={event => this.lengthHander(event)}
          value={this.state.inputText.join("")}
        />
        {this.state.inputLength ? <p>{this.state.inputLength}</p> : <p>0</p>}
        <ValidationComponent length={this.state.inputLength} />
        {this.state.inputText.map((letter, index) => {
          return (
            <CharComponent
              title={letter}
              key={index}
              click={this.deleteCharComponentHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
