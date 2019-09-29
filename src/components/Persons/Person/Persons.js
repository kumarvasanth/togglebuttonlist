import React from "react";
import Person from "./Person";

const Persons = props => {
  return props.Persons.map(person => {
    return (
      <div>
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          change={event => props.change(event, person.id)}
          click={index => props.click(index)}
        ></Person>
        <br />
      </div>
    );
  });
};
export default Persons;
