import React, { Component, Fragment } from "react";
import PlayLineInput from "../PlayLineInput";
import * as S from "./styles";

class PlayLine extends Component {
  constructor(props) {
    super(props);

    this.state = {};

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
  }

  handleLuckyDipClick = () => {
    this.setState({ luckyDipClicked: true });

    if (this.state.luckyDipClicked) {
      return this.clearAllInputs();
    }
    return this.populateInputsWithRandomNumbers();
  };

  clearAllInputs = () =>
    this.setState({ ...this.clearedState, luckyDipClicked: false });

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

  assignRandomNumberToKey = (object, key, maxValue) =>
    (object[key] = Math.floor(Math.random() * maxValue + 1));

  renderInputs = () => {
    return this.numberOfInputsToRender.map((num, index) => (
      <Fragment key={num}>
        <PlayLineInput
          id={num}
          name={`input_${num}`}
          value={this.state[`input_${num}`]}
          ranges={this.inputValueRanges}
        />
      </Fragment>
    ));
  };

  render() {
    return (
      <S.PlayLineWrapper>
        <S.Button onClick={this.handleLuckyDipClick}>Lucky Dip</S.Button>
        {this.renderInputs()}
        <S.Clear onClick={this.clearAllInputs}>
          <S.Plus className="fa fa-plus" />
        </S.Clear>
        <S.Icon className="fa fa-star" />
        <S.Icon className="fa fa-star" />
      </S.PlayLineWrapper>
    );
  }
}

export default PlayLine;
