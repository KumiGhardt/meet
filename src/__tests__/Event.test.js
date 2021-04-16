import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import EventList from '../EventList';


describe('<App /> component', () => {
 // A list of events, each element collapsed by default
    test('render list of events', () => {
        const AppWrapper = shallow(<App />);
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      });
//expand an event to see its location, description, start time
      test('expand an event to see its details', () => {
        const EventList = shallow(<EventList />);
        expect(EventList.find(EventList)).toHaveLength(1);
      })



});