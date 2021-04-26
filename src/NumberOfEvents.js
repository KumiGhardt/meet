import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
		numberOfEvents: 32,
	}

  handleInputChanged = (event) => {
    const { updateEvents } = this.props;
    const numberOfEvents = event.target.value;
		this.setState({
			numberOfEvents
    });
    updateEvents(null, numberOfEvents);
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