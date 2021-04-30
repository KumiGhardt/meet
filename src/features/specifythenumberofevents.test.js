import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyTheNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  let NumberOfEventsWrapper;

  test("When user hasn’t specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given("The user has not filtered the number of events", () => {
      AppWrapper = mount(<App />);
    });

    when("The user clicks on Filter", () => {
      NumberOfEventsWrapper = shallow(
        <NumberOfEvents updateEvents={() => {}} />
      );
    });

    then("The user should see the option to filter number of events", () => {
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    given("the user has navigated to the filter option", () => {
        AppWrapper = mount(<App />);
    });

    when("the user selects a number of events to filter to", () => {
      const eventObject = { target: { value: 2 } };
      NumberOfEventsWrapper.find(".NumberOfEvents input").simulate(
        "change",
        eventObject
      );
    });

    then(
      "the main view changes to display the number of events selected by the user",
      () => {
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(2);
      }
    );
  });
});
