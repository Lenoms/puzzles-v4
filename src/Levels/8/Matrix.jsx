import { useEffect, useState, useRef } from "react";
import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import "./Matrix.css";

function Matrix() {

  const matrixContainerRef = useRef(null);

  const generateRandomLetters = (count) => {
    const randomLetters = [];
    for (let i = 0; i < count; i++) {
      const randomCharCode = 65 + Math.floor(Math.random() * 26);
      randomLetters.push(String.fromCharCode(randomCharCode));
    }
    return randomLetters;
  };


  const calculateNumberOfLetters = () => {
    const letterBoxHeight = 40; // Hardcoded height of the letter box
    const letterBoxWidth = 40;  // Hardcoded width of the letter box
  
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const rows = Math.ceil(screenHeight / letterBoxHeight);
    const columns = Math.ceil(screenWidth / letterBoxWidth);
  
    console.log(rows, columns, rows*columns)
    return rows * columns;
  };
  

  const [letters, setLetters] = useState(() => generateRandomLetters(calculateNumberOfLetters()));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    console.log(letters.length)
    const intervalId = setInterval(() => {
      setLetters((prevLetters) => {
        const updatedLetters = prevLetters.map((letter, index) => {
          if (index === hoveredIndex) {
            return "A"; // Keep the hovered letter as "A"
          } else {
            return generateRandomLetters(1)[0]; // Change other letters
          }
        });
        return updatedLetters;
      });
    }, 80);

    return () => clearInterval(intervalId);
  }, [hoveredIndex]);

  const handleHover = (index) => {
    let timeoutId;
    timeoutId = setTimeout(() => {
      setHoveredIndex(index);
    }, 500); // Set the delay time here (in milliseconds)

    return () => clearTimeout(timeoutId);
  };

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
