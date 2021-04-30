Feature: Specify the number of events


Scenario: When user hasn’t specified a number, 32 is the default number.
Given The user has not filtered the number of events
When The user clicks on Filter
Then The user should see the option to filter number of events

Scenario: User can change the number of events they want to see.
Given the user has navigated to the filter option
When the user selects a number of events to filter to
Then the main view changes to display the number of events selected by the user