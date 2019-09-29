import React from "react";
import "./App.css";
import Persons from "../components/Persons/Person/Persons";
import "../components/Persons/Person/Person.css";
import Cockpit from "../components/cockpit/cockpit";

class App extends React.Component {
  state = {
    Persons: [
      { id: 1, name: "Vasanth Kumar", age: 24 },
      { id: 2, name: "Pruthvi", age: 24 },
      { id: 3, name: "santhosh", age: 23 }
    ],
    showPerson: false
  };

  toggleButtonChangeHandler = () => {
    const showperson = this.state.showPerson;
    this.setState({
      showPerson: !showperson
    });
  };

  onInputChangeHandler = (event, id) => {
    const index = this.state.Persons.findIndex(p => {
      return p.id === id;
    });

    const persons = {
      ...this.state.Persons[index]
    };

    persons.name = event.target.value;

    const person = [...this.state.Persons];
    person[index] = persons;
    this.setState({
      Persons: person
    });
  };

  onClickDeletehandler = id => {
    const person = [...this.state.Persons];
    person.splice(id, 1);
    this.setState({
      Persons: person
    });
  };

  render() {
    let toggle = null;

    if (this.state.showPerson) {
      toggle = (
        <Persons
          Persons={this.state.Persons}
          change={this.onClickDeletehandler}
          click={this.onClickDeletehandler}
        ></Persons>
      );
    }

    return (
      <div className="App">
        <Cockpit click={this.toggleButtonChangeHandler} />
        <div>{toggle}</div>
      </div>
    );
  }
}

export default App;
