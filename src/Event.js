import React, { Component } from "react";


class Event extends Component {

  state = {
    isExpanded: false
}

  render() {
      const { event } = this.props;
      const { isExpanded } = this.state;
      
    return (
      <div className="event">
          <div className="collapsed-event">
              <div className="event-title">
                  <h1>{event.summary}</h1>
                  <div className="event-date">
                      <p>{new Date(event.date).toLocaleDateString(
                          'en-gb', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'utc'})}
                      </p>
                  </div>
              </div>
              <div className="location">
                  <p>{event.location}</p>
              </div>
              
          </div>
          { isExpanded ? <div className="event-details">
              <div className="line"/>
              <p>{event.description}</p>
              <a href={event.htmlLink} target="_blank" rel="noreferrer">Event Details</a>
          </div> : null}
          <div className="more-less__button" onClick={this.handleExpandEvent}>
              <button className="event__details-button">
                  {isExpanded ? "Less" : "More"}
              </button>
          </div>
      </div>
  )
  }
}
export default Event;
