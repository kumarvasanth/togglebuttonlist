import React from "react";

const Cockpit = props => {
  return (
    <div>
      <br />
      <p>This Is Toggle Button project</p>
      <br />
      <button onClick={props.click}> Togglebutton </button>
    </div>
  );
};
export default Cockpit;
