import { lettersByColour } from "./Colours.constants";

export function getColoursFromString(inputString) {
  const colours = [];

  for (const letter of inputString) {
    const colour = getColourByLetter(letter);
    if (colour) {
      colours.push(colour);
    }
  }

  return colours.join(", ");
}

function getColourByLetter(letter) {
  for (const key in lettersByColour) {
    if (lettersByColour[key] === letter) {
      return key;
    }
  }
  // If the letter is not found, you can handle it accordingly, e.g., return null.
  return null;
}

export function generateDotArray() {
  const colors = [
    "rgb(255, 0, 0)", // Red
    "rgb(255, 165, 0)", // Orange
    "rgb(255, 255, 0)", // Yellow
    "rgb(85, 168, 48)", // Grassy Green
    "rgb(0, 255, 255)", // Cyan
    "rgb(0, 0, 255)", // Blue
    "rgb(128, 0, 128)", // Purple
    "rgb(255, 20, 147)", // Deep Pink
    "rgb(255, 69, 0)", // Red-Orange
    "rgb(255, 215, 0)", // Gold
    "rgb(0, 128, 0)", // Green
    "rgb(0, 128, 128)", // Teal
    "rgb(0, 0, 128)", // Navy
    "rgb(255, 102, 255)", // Pinkish
    "rgb(232, 120, 120)", // Pink
    "rgb(128, 0, 255)", // Violet
  ];

  const dotArray = [];

  let previousColor = null;

  for (let i = 0; i < 10; i++) {
    const innerArray = [];

    for (let j = 0; j < 12; j++) {
      let randomIndex;

      // Ensure the next random color is different from the previous one
      do {
        randomIndex = Math.floor(Math.random() * colors.length);
      } while (colors[randomIndex] === previousColor);

      const dot = {
        colour: colors[randomIndex],
        letter: lettersByColour[colors[randomIndex]],
      };

      innerArray.push(dot);
      previousColor = colors[randomIndex];
    }

    dotArray.push(innerArray);
  }

  return dotArray;
}
