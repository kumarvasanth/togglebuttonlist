import React from "react";
import "./Person.css";

class Person extends React.Component {
  render() {
    return (
      <div className="Person" onClick={this.props.click}>
        <p>
          I'm {this.props.name} and Iam{this.props.age} years old!
        </p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}
export default Person;
