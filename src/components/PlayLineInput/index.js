import React, { Component } from "react";
import * as S from "./styles";

class PlayLineInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prev) {
    if (prev !== this.props) {
      this.setState({ value: this.props.value });
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    const { luckyStar, normal } = this.props.ranges;
    const range = name === "input_6" || name === "input_7" ? luckyStar : normal;

    this.setState({ value: this.validate(value, range) });
  };

  validate = (value, range) =>
    isNaN(value) ? "" : this.onlyShowNumberWithinRange(value, range);

  onlyShowNumberWithinRange = (value, { min, max }) =>
    value >= min && value <= max ? value : "";

  render() {
    return (
      <S.Input
        id={this.props.name}
        key={this.props.id}
        type="text"
        name={this.props.name}
        value={this.state.value}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default PlayLineInput;
