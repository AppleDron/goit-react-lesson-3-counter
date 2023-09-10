import React, { Component } from 'react';
import './Clock.scss';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  interValid = null;

  componentDidMount = () => {
    this.interValid = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interValid);
  };

  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}
