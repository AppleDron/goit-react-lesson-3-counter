import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handlerLicenseChange = event => {
    this.setState({ license: event.currentTarget.checked });
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Username
          <input
            id={this.tagInputId}
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Your level:</p>

        <label>
          <input
            type="radio"
            onChange={this.handleChange}
            name="experience"
            value="junior"
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            onChange={this.handleChange}
            name="experience"
            value="middle"
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            onChange={this.handleChange}
            name="experience"
            value="senior"
          />
          Senior
        </label>
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handlerLicenseChange}
          ></input>{' '}
          Agree with statement
        </label>

        <button type="submit" disabled={!this.state.license}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
