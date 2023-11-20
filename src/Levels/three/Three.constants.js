export const wizardText =
  "Greetings Reader! I am the colour wizard! It's so nice of you to visit my book. " +
  "I don't see many travellers these days. The solution you are looking for is: ";
export const wizardAnswer =
  "rgb(255, 0, 0), rgb(255, 165, 0), rgb(255, 255, 0), rgb(85, 168, 48), rgb(0, 255, 255), rgb(0, 0, 255), rgb(128, 0, 128), rgb(255, 20, 147), rgb(255, 69, 0), rgb(85, 168, 48)";

const lettersByColour = {
  "rgb(255, 0, 0)": "C", // Red
  "rgb(255, 165, 0)": "H", // Orange
  "rgb(255, 255, 0)": "R", // Yellow
  "rgb(85, 168, 48)": "O", // Grassy Green
  "rgb(0, 255, 255)": "M", // Cyan
  "rgb(0, 0, 255)": "A", // Blue
  "rgb(128, 0, 128)": "L", // Purple
  "rgb(255, 20, 147)": "E", // Deep Pink
  "rgb(255, 69, 0)": "V", // Red-Orange
  "rgb(255, 215, 0)": "K", // Gold
  "rgb(0, 128, 0)": "B", // Green
  "rgb(0, 128, 128)": "D", // Teal
  "rgb(0, 0, 128)": "F", // Navy
  "rgb(255, 102, 255)": "G", // Pinkish
  "rgb(232, 120, 120)": "I", // Pink
  "rgb(128, 0, 255)": "J", // Violet
};

export const dotArray = generateDotArray();

function generateDotArray() {
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

  const letters = "ABCDEFGHIJKL";
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
