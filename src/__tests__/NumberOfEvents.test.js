import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import {mockData} from '../mock-data';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    })

    test('render of number of events', () => {
        expect(NumberOfEventsWrapper).toHaveLength(1);
    });


    test('change state when the number of events changes', () => {
        NumberOfEventsWrapper.setState({
            eventCount: 2
        });
        const eventObject = { target : { value: 1 }}; 
        NumberOfEventsWrapper.find('.NumberOfEvents input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('eventCount')).toBe(1);
    })
})