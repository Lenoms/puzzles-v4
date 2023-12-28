import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import "./Castle.css";
import castlePuzzle from './CastlePuzzleImage.png'

function Castle() {
  return (
    <div className="level-castle-div">
      <AnswerAndHintBox />
      <div className="sky"></div>
      <img className="castle-puzzle-image" src={castlePuzzle}></img>
    
    </div>
  );
}

// This level is gonna be very hard to do with the colour sapping mechanic. DON'T revert to css. I like the way it looks,
// and positioning things without them all in one image is HARD. Maybe make new images on paint with the correct colour.
// Gonna be a bitch.
export default Castle;
