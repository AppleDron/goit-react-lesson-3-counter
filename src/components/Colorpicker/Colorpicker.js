import { Component } from 'react';
import './Colorpicker.css';
import classNames from 'classnames';

export class Colorpicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClasses = index => {
    return classNames('Colorpicker__option', {
      'Colorpicker__option--active': index === this.state.activeOptionIdx,
    });
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="Colorpicker">
        <h2 className="Colorpicker__title">Color Picker</h2>
        <p> Color is: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                className={this.makeOptionClasses(index)}
                key={label}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
