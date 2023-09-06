import { Component } from 'react';
import './ToDoEditor.scss';

class ToDoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.textareaSubmitHandler(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>

        <button className="TodoEditor__button" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

export default ToDoEditor;
