import React, { Component } from "react";

class PlayLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input_1: "",
      input_2: "",
      input_3: "",
      input_4: "",
      input_5: "",
      input_6: "",
      input_7: ""
    };

    this.clearedState = {
      input_1: "",
      input_2: "",
      input_3: "",
      input_4: "",
      input_5: "",
      input_6: "",
      input_7: ""
    };

    this.inputs = [1, 2, 3, 4, 5, 6, 7];
  }

  populateInputsWithRandomNumbers = () => {
    const changedClearedState = this.changeClearedStateValues();
    this.setState(changedClearedState);
  };

  changeClearedStateValues = () => {
    let clearedStateCopy = { ...this.clearedState };

    Object.keys(clearedStateCopy).forEach(
      key => (clearedStateCopy[key] = Math.floor(Math.random() * 50 + 1))
    );

    return clearedStateCopy;
  };

  handleLuckyDipClick = () => {
    this.setState({ luckyDipClicked: true });

    if (this.state.luckyDipClicked) {
      return this.clearAllInputs();
    }
    return this.populateInputsWithRandomNumbers();
  };

  clearAllInputs = () =>
    this.setState({ ...this.clearedState, luckyDipClicked: false });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  renderInputs = () => {
    return this.inputs.map(num => (
      <input
        key={num}
        type="text"
        name={`input_${num}`}
        value={this.state[`input_${num}`]}
        onChange={this.handleChange}
      />
    ));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleLuckyDipClick}>Lucky Dip</button>
        {this.renderInputs()}
        <span onClick={this.clearAllInputs}>&times;</span>
      </div>
    );
  }
}

export default PlayLine;
