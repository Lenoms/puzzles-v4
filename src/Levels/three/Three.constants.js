import { generateDotArray, getColoursFromString } from "./Three.service";

export const lettersByColour = {
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

export const wizardText =
  "Greetings Reader! I am the Colour Wizard! It's so nice of you to visit my book. " +
  "I don't see many travellers these days. The solution to this book is: ";
export const wizardAnswer = getColoursFromString("CHROMALEVO");

export const dotArray = generateDotArray();
