import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
		eventCount: this.props.eventCount,
	}

  handleInputChanged = (event) => {
		const eventCount = event.target.value;
		this.setState({
			eventCount
    });
	}
	

  render() {
    return (
      <div className="NumberOfEvents">
          <input
        type="number"
        min="1" max="32"
        value={this.state.eventCount}
					onChange={this.handleInputChanged}
      />
      </div>
    );
  }
}

export default NumberOfEvents