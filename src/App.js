import React, { Component } from "react";
import "./nprogress.css";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import EventGenre from "./EventGenre";
import { getEvents, extractLocations } from "./api";
import { WarningAlert } from "./Alert";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
        warningText: "You are offline",
      });
    } else {
      this.setState({
        warningText: "",
      });
    }

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(" ").shift();
      return { city, number };
    });
    return data;
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
  const { events } = this.state;
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
        <h4>Upcoming Events</h4>

        <div className="data-vis-wrapper">

          <EventGenre events={ events } />
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#016960" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
