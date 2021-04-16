import React, { Component } from "react";
import EventList from "./EventList";

class Event extends Component {

  state = {
    event: {},
  };

  handleItemClicked = (event) => {
    this.setState({
      event: {}
    });
  };

  render() {
      const event = this.props;
      
    return <div className="Event">
      {event.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      <b>Back</b>
    </div>;
  }
}
export default Event;
