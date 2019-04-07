import React, { Component } from "react";
import PlayLine from "./components/PlayLine";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <PlayLine />
        <PlayLine />
        <PlayLine />
        <PlayLine />
      </div>
    );
  }
}

export default App;
