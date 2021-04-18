import React, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents">
          <input
        type="number"
        min="1" max="32"
      />
      </div>
    );
  }
}

export default NumberOfEvents