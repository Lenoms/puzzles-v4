import { useEffect, useState, useRef } from "react";
import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import { generateRandomLetters, calculateNumberOfLetters } from "./Matrix.service.js";
import "./Matrix.css";
import { MATRIX_SOLUTION } from "./Matrix.constants.js";

function Matrix() {
  const matrixContainerRef = useRef(null);
  const timeoutIdRef = useRef(null);

  const [letters, setLetters] = useState(() => generateRandomLetters(calculateNumberOfLetters()));
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);

  const handleHover = (index) => {
    clearTimeout(timeoutIdRef.current);
    const newTimeoutId = setTimeout(() => {
      setHoveredIndex(index);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % MATRIX_SOLUTION.length);
    }, 250);
    timeoutIdRef.current = newTimeoutId;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLetters((prevLetters) => {
        const updatedLetters = prevLetters.map((letter, index) => {
          if (index === hoveredIndex) {
            return MATRIX_SOLUTION[currentWordIndex];
          } else {
            return generateRandomLetters(1)[0];
          }
        });
        return updatedLetters;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [hoveredIndex, currentWordIndex]);

  useEffect(() => {
    setLetters(generateRandomLetters(calculateNumberOfLetters()));
  }, [window.innerHeight, window.innerWidth]);

  return (
    <div className="level-matrix-div" ref={matrixContainerRef}>
      <AnswerAndHintBox />
      {letters.map((letter, index) => (
        <div
          className="matrix-letter-box"
          key={index}
          onMouseOver={() => handleHover(index)}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Matrix;
