import { levelAnswers } from "../constants/LevelAnswers.constants";

export function answerIsCorrect(answer, location) {
  // Get the last segment of the pathname
  const level = location.pathname.split("/").pop();

  // Compare the provided answer with the last segment
  return answer.toUpperCase() === levelAnswers[level].toUpperCase();
}
