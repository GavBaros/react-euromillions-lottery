import React, { Component } from "react";
import { CountUp } from "countup.js";

class PlayLineInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef();
  }

  animateValue = (id, start, end, duration) => {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    // var obj = document.getElementById(id);
    var timer = setInterval(function() {
      current += increment;
      this.myRef.current.innerHtml = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  componentDidMount() {
    this.animateValue("input", 0, Math.floor(Math.random() * 50 + 1), 2000);
  }

  render() {
    return (
      <input
        id="input"
        ref={this.myRef}
        key={this.props.key}
        type="text"
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.OnChange}
      />
    );
  }
}

export default PlayLineInput;
