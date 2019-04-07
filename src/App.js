import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const initialState = {
  input1: "",
  input2: "",
  input3: "",
  input4: "",
  input5: ""
};

class App extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  clearAllInputs = () => {
    this.setState(initialState);
  };

  populateInputsWithRandomNumbers = () => {
    const changedInitialState = this.changeInitialStateValues();
    this.setState(changedInitialState);
  };

  changeInitialStateValues = () => {
    let initialStateCopy = { ...initialState };

    Object.keys(initialStateCopy).forEach(
      key => (initialStateCopy[key] = Math.floor(Math.random() * 50 + 1))
    );

    return initialStateCopy;
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.populateInputsWithRandomNumbers}>
          Lucky Dip
        </button>
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
        <span onClick={this.clearAllInputs}>&times;</span>
      </div>
    );
  }
}

export default App;
