import { levelAnswers } from "../constants/LevelAnswers.constants";

export function answerIsCorrect(answer, location) {
  // Get the last segment of the pathname
  const level = location.pathname.split("/").pop();

  // Compare the provided answer with the last segment
  return answer.toUpperCase() === levelAnswers[level].toUpperCase();
}

export function calculateColourRGB(rgb, n) {
  // Ensure n is between 1 and 10
  n = Math.max(1, Math.min(10, n));

  // Calculate the grayscale value
  const grayscale = (rgb[0] + rgb[1] + rgb[2]) / 3;

  // Interpolate between the original color and grayscale based on n
  const newR = Math.round((1 - n / 10) * rgb[0] + (n / 10) * grayscale);
  const newG = Math.round((1 - n / 10) * rgb[1] + (n / 10) * grayscale);
  const newB = Math.round((1 - n / 10) * rgb[2] + (n / 10) * grayscale);

  console.log(`rgb(${newR}, ${newG}, ${newB})`);
  return `rgb(${newR}, ${newG}, ${newB})`;
}
