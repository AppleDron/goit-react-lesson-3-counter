import { Component } from 'react';
import './Dropdown.css';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(state => ({
      visible: !state.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          className="Dropdown__toggle"
          type="button"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Закрити' : 'Відкрити'}
        </button>

        {this.state.visible && <div className="Dropdown__menu">Menu</div>}
      </div>
    );
  }
}
