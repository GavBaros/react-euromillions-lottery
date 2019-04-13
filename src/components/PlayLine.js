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

    this.numberOfInputs = [1, 2, 3, 4, 5, 6, 7];

    this.inputRanges = {
      normal: {
        min: 1,
        max: 50
      },
      luckyStar: {
        min: 1,
        max: 12
      }
    };
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

  handleInvalidValues = value => this.showOnlyNumericValues(value);

  showOnlyNumericValues = value =>
    isNaN(value) ? "" : this.makeNumericValuesWithinRange(value);

  makeNumericValuesWithinRange = value =>
    value >= 1 && value <= 50 ? value : "";

  renderInputs = () => {
    return this.numberOfInputs.map(num => (
      <input
        key={num}
        type="text"
        name={`input_${num}`}
        value={this.handleInvalidValues(this.state[`input_${num}`])}
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
