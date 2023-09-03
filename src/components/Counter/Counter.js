import { Component } from 'react';
import { Controls } from './Controls';
import { Value } from './Value';
import './Counter.css';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
    step: this.props.step,
  };

  handleIncrement = () => {
    this.setState(state => {
      return {
        value: state.value + state.step,
      };
    });
  };

  handleDecrement = () => {
    this.setState(state => {
      return {
        value: state.value - state.step,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
