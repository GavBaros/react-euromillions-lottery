import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          name="input1"
          value={this.state.input1}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="input2"
          value={this.state.input2}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="input3"
          value={this.state.input3}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="input4"
          value={this.state.input4}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="input5"
          value={this.state.input5}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
