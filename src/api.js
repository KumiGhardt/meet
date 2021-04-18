//handle your API calls in the future.

  // export const extractSummary = (events) => {
  //   var extractSummary = events.map((event) => event.summary);
  //   var title = [...new Set(extractSummary)];
  //   return title;
  // };

  // export const extractDate = (events) => {
  //   var extractDate = events.map((event) => event.start);
  //   var date = [...new Set(extractDate)];
  //   return date;
  // };

  export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
  };

  // export const extractDescription = (events) => {
  //   var extractDescription = events.map((event) => event.description);
  //   var description = [...new Set(extractDescription)];
  //   return description;
  // };