import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    query: '',
  }


  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value});
  }

  render() {
    return (
      <div className="NumberOfEvents">
          <input
        type="number"
        min="1" max="32"
        value={this.state.query}
        onChange={this.handleInputChanged}
      />
      </div>
    );
  }
}

export default NumberOfEvents