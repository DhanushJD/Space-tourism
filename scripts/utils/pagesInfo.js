export let dataDestinations;
export let dataCrew;
export let dataTech;

const response = await fetch('./scripts/data/data.json');
const data = await response.json();

dataDestinations = data.destinations;

dataCrew = data.crew;

dataTech = data.technology;

export function matchingDetails (data, matchString){
  return data.find(details => details.name === matchString || details.id === matchString);
}

