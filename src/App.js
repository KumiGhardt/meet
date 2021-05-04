import React, { Component } from "react";
import "./nprogress.css";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { WarningAlert } from './Alert';


class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    selectedLocation: "all",
  };

  updateEvents = (location, eventCount) => {
    let locationEvents;
    getEvents().then((events) => {
      const count = eventCount || this.state.eventCount;
      const selectedLocation = location || this.state.selectedLocation;

      if (selectedLocation === "all") {
        locationEvents = events.slice(0, count);
        console.log({ locationEvents });
      } else {
        locationEvents = events
          .filter((event) => event.location === selectedLocation)
          .slice(0, count);
      }

      this.setState({
        events: locationEvents,
        eventCount: count,
        selectedLocation,
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine) {
      return this.setState({
        warningText:
          'You are offline',
      });
    } else {
      this.setState({
       warningText: '',
     });
    }

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        <h2>Welcome to the Meet App</h2>
         <p>Choose a City</p>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <p>No. of events</p>
        <NumberOfEvents updateEvents={this.updateEvents} />
        <p>Upcoming Events</p>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
