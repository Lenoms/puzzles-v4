import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import "./Castle.css";
import castle from './CastleImage.png'
import path from './PathImage.png'
import cabbageCart from './CabbageCartImage.png'

function Castle() {
  return (
    <div className="level-castle-div">
      <AnswerAndHintBox />
      <div className="castle-container">
        <img src={castle}></img>
      </div>
      <div className="path-container">
        <img style={{width: "100%"}} src={path}></img>
      </div>
      <div className="cabbage-container">
        <img src={cabbageCart}></img>
      </div>
    </div>
  );
}

// Put the colour of the letters in order on a flag or something

export default Castle;
