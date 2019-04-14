import React, { Component } from "react";
import { CountUp } from "countup.js";
import PlayLineInput from "./PlayLineInput";

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

    this.numberOfInputsToRender = [1, 2, 3, 4, 5, 6, 7];

    this.inputValueRanges = {
      normal: {
        min: 1,
        max: 50
      },
      luckyStar: {
        min: 1,
        max: 12
      }
    };

    this.myRef = React.createRef();
  }

  async populateInputsWithRandomNumbers() {
    const objectWithRandomValues = await this.assignRandomValuesToObject();
    this.setState(objectWithRandomValues);
  }

  assignRandomValuesToObject = () => {
    const cloneObject = { ...this.clearedState };
    const { normal, luckyStar } = this.inputValueRanges;

    Object.keys(cloneObject).forEach(key => {
      if (key === "input_6" || key === "input_7") {
        return this.assignRandomNumberToKey(cloneObject, key, luckyStar.max);
      }
      return this.assignRandomNumberToKey(cloneObject, key, normal.max);
    });

    return cloneObject;
  };

  // animateValue = (id, start, end, duration) => {
  //   let range = end - start;
  //   let current = start;
  //   let increment = end > start ? 1 : -1;
  //   let stepTime = Math.abs(Math.floor(duration / range));
  //   let obj = this.myRef.current;
  //   let timer = setInterval(() => {
  //     current += increment;
  //     obj.value = current;
  //     // this.myRef.current.value = current;
  //
  //     if (current == end) {
  //       clearInterval(timer);
  //     }
  //   }, stepTime);
  // };

  assignRandomNumberToKey = (object, key, maxValue) => {
    let CountUpOptions = {
      duration: 1
    };
    const countUp = new CountUp(
      key,
      Math.floor(Math.random() * maxValue + 1),
      CountUpOptions
    );

    // let z = this.animateValue(key, 0, Math.floor(Math.random() * 50 + 1), 250);

    return (object[key] = countUp.start());
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

  handleInputChange = ({ target: { name, value } }) => {
    const { luckyStar, normal } = this.inputValueRanges;
    const range = name === "input_6" || name === "input_7" ? luckyStar : normal;

    this.setState({ [name]: this.validate(value, range) });
  };

  validate = (value, range) =>
    isNaN(value) ? "" : this.onlyShowNumberWithinRange(value, range);

  onlyShowNumberWithinRange = (value, { min, max }) => {
    return value >= min && value <= max ? value : "";
  };

  renderInputs = () => {
    // let countUp = new CountUp("input", 12]);

    return this.numberOfInputsToRender.map((num, index) => {
      return (
        <input
          ref={this.myRef}
          id={`input_${num}`}
          key={num}
          type="text"
          name={`input_${num}`}
          value={this.state[`input_${num}`]}
          onChange={this.handleInputChange}
        />
      );

      // return (
      //   <PlayLineInput
      //     key={num}
      //     name={`input_${num}`}
      //     value={this.state[`input_${num}`]}
      //     onChange={this.handleInputChange}
      //   />
      // );
    });
  };

  render() {
    return (
      <div className="playline">
        <button onClick={this.handleLuckyDipClick}>Lucky Dip</button>
        {this.renderInputs()}
        <div className="clear" onClick={this.clearAllInputs}>
          <img src="times-solid.svg" />
        </div>
        <i className="fa fa-star fa-xs" />
        <i className="fa fa-star fa-xs" />
      </div>
    );
  }
}

export default PlayLine;
