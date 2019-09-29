import React, { Component } from "react";

class Validation extends Component {
  render() {
    let strlngth = this.props.length;
    let Strlg = "String is Long";
    let Strst = "String is Short";

    if (strlngth > 5) {
      return <div>{Strlg}</div>;
    } else {
      return <div>{Strst}</div>;
    }
  }
}
export default Validation;
