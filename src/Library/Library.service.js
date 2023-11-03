export function getRandomBookValues(n) {
  // Define a list of 10 possible colors
  const colourOptions = [
    "rgb(128, 0, 0)", // Dark Red
    "rgb(0, 0, 128)", // Dark Blue
    "rgb(0, 128, 0)", // Dark Green
    "rgb(128, 128, 0)", // Dark Yellow
    "rgb(64, 0, 64)", // Dark Purple
    "rgb(128, 64, 0)", // Dark Orange
    "rgb(128, 0, 128)", // Dark Pink
    "rgb(64, 32, 0)", // Dark Brown
    "rgb(0, 128, 128)", // Dark Cyan
    "rgb(128, 0, 64)", // Dark Magenta
  ];

  // Helper function to generate a random number between 40 and 90
  function generateRandomHeight() {
    return Math.floor(Math.random() * (90 - 40 + 1)) + 40;
  }

  // Create an array to store the generated objects
  const books = [];

  // Generate n objects
  for (let i = 0; i < n; i++) {
    const colourIndex = Math.floor(Math.random() * colourOptions.length);
    const randomColour = colourOptions[colourIndex];
    const randomHeight = generateRandomHeight();

    // Create an object with "color" and "height" properties
    const book = {
      colour: randomColour,
      height: randomHeight,
    };

    // Add the object to the array
    books.push(book);
  }

  return books;
}
