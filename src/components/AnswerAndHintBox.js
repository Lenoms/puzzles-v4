import React, { useState } from "react";
import "./AnswerAndHintBox.css";
import { answerIsCorrect } from "../services/Game.service";
import { useLocation } from "react-router-dom";

function AnswerAndHintBox() {
  const [isHidden, setIsHidden] = useState(true);
  const [textInput, setTextInput] = useState("");
  const location = useLocation();

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
    if (answerIsCorrect(e.target.value, location)) {
      console.log("Level complete!");
      // Handle level end
    }
  };

  const handleArrowClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={`answer-hint-box-container ${
        isHidden ? "short" : "additional-content"
      }`}
    >
      <div className="answer-text-and-arrow-container">
        <input
          type="text"
          className="answer-text-box"
          value={textInput}
          onChange={handleInputChange}
          placeholder="Answer"
        />
        <div
          className={`dropdown-arrow ${isHidden ? "down-arrow" : "up-arrow"}`}
          onClick={handleArrowClick}
        ></div>
      </div>
      {!isHidden && (
        <div className="dropdown-section">
          {/* Content to be revealed */}
          <p>Additional content</p>
          {/* Add more elements or data to show in the revealed section */}
        </div>
      )}
    </div>
  );
}

export default AnswerAndHintBox;
