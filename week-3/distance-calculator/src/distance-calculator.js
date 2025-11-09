function calculateDistance(planet1, planet2) {

  // AU from Sun list
  const planetDist = {
    mercury: 0.39,
    venus: 0.72,
    earth: 1,
    mars: 1.52,
    jupiter: 5.2,
    saturn: 9.5,
    uranus: 19.2,
    neptune: 30.1,
    pluto: 39.5,
  };

  // Convert arguments to lowercase to match AU list
  planet1 = planet1.toLowerCase();
  planet2 = planet2.toLowerCase();

  // Subtract planet1 and planet2, rounding to 2 digits after decimal, and converting it to positive via absolute value
  const totalDistance = Math.abs(planetDist[planet1] - planetDist[planet2]).toFixed(2);

  return Number(totalDistance);
}

module.exports = calculateDistance;