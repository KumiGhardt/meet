import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from "../mock-data";



describe('<App /> component', () => {
  const event = { mockData };

  let EventWrapper, expandButton, eventContainer;
  beforeAll(() => {
      EventWrapper = shallow(<Event event={event}/>);
      eventContainer = EventWrapper.find('.event');
      expandButton = EventWrapper.find('.event__details-button');
  })

  test('render expand event button', () => {
      expect(expandButton).toHaveLength(1);
  })

  test('render event basic information', () => {
      expect(eventContainer.find('.collapsed-event')).toHaveLength(1);
  })

  test('state is changed when button is clicked', () => {
      EventWrapper.setState({
          isExpanded: false
      })
      expandButton.simulate('click');
      expect(EventWrapper.state('isExpanded')).toBe(false);
  })

  test('render extra information when button is clicked and state is changed to true', () => {
      EventWrapper.setState({
          isExpanded: false
      })
      expandButton.simulate('click');
      expect(EventWrapper.find('.event-details')).toHaveLength(0);
  })

  test('hide extra information when button is clicked and state is changed to false', () => {
      EventWrapper.setState({
          isExpanded: true
      })
      expandButton.simulate('click');
      expect(EventWrapper.find('.event-details')).toHaveLength(1);
  })
})

