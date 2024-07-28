import React, { Component } from "react";

export default class Home extends Component {
  state = {
    count: 0,
  };

  changeCount = () => {
    // deep copy
    let myCount = this.state.count;
    // action
    myCount = Math.random();
    // setState

    this.setState({
      count: myCount,
    });
  };

  render() {
    return (
      <div>
        <h1> Home</h1>
        <h3> Count : {this.state.count}</h3>
        <button className="btn btn-info" onClick={() => this.changeCount()}>
          Change
        </button>
      </div>
    );
  }
}
