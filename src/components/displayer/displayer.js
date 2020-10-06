import React, { Component } from "react";

export default class displayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
      userName: "",
      inputValue: 1,
      isVisible: false,
    };
    this.addOne = this.addOne.bind(this);
  }
  addOne() {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });
  }
  addValue() {
    this.setState((prevState) => {
      return {
        number: prevState.number + prevState.inputValue,
      };
    });
  }
  handleInputChange(e) {
    this.setState({
      inputValue: parseInt(e.target.value),
    });
  }
  handleUserNameChange(e) {
    this.setState({
      userName: e.target.value,
    });
    this.props.onChangeUserName(e.target.value);
  }
  render() {
    return (
      <React.Fragment>
        <div>Original Value: {this.props.number}</div>
        <div>New value: {this.state.number}</div>
        <button onClick={this.addOne}>Add one</button>
        <input
          type="number"
          value={this.state.inputValue}
          onChange={(e) => this.handleInputChange(e)}
        />
        <input
          value={this.state.userName}
          onChange={(e) => this.handleUserNameChange(e)}
        />
        <button onClick={() => this.addValue()}>Add Value</button>
      </React.Fragment>
    );
  }
}
