import React from 'react';
import Certificate from './Certificate';

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      course: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>Course:
            <input type="text" name="course" onChange={this.handleChange} />
          </label>
        </form>
        <Certificate name={this.state.name} course={this.state.course} />
      </div>
    );
  }
}

export default View;