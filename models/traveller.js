const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journey => journey.startLocation);
  return startLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(journey => journey.endLocation);
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport )

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance )

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let results = []
  this.journeys.forEach((journey) => {
    results.push(journey.distance)
  })
  return results.reduce((runningTotal, currentNumber) => {return runningTotal + currentNumber}, 0)

}; 

Traveller.prototype.getUniqueModesOfTransport = function () {
let modesOfTransport = []
this.journeys.forEach((journey) => {
  modesOfTransport.push(journey.transport);
});

let uniqueTransport = [...new Set(modesOfTransport)];
return uniqueTransport

}


module.exports = Traveller;
