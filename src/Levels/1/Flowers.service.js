export function generateFlowers(n) {
  // Array to store generated objects
  const flowers = [];

  // Possible colors for the flowers
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "violet",
    "white",
    "cyan",
  ];

  // Helper function to generate a random integer between min and max
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate n objects
  for (let i = 0; i < n; i++) {
    const flower = {
      colour: colors[getRandomInt(0, colors.length - 1)],
      top: `${getRandomInt(0, 100)}%`,
      left: `${getRandomInt(0, 100)}%`,
    };

    // Push the generated flower object to the array
    flowers.push(flower);
  }

  return flowers;
}
