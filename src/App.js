import React, { Component } from "react";
import "./App.css";
import Displayer from "./components/displayer/displayer";
import AnotherComp from "./components/anotherComp/anotherComp";

export default class App extends Component {
  constructor() {
    super();
    this.state = { userName: "" };
  }
  updateUserName(value) {
    this.setState({ userName: value });
  }
  render() {
    return (
      <>
        <Displayer
          number={45}
          onChangeUserName={(value) => this.updateUserName(value)}
        />
        <AnotherComp text={this.state.userName} />
      </>
    );
  }
}
