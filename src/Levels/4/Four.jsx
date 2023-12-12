import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import { calculateColourRGB } from "../../services/Game.service";
import "./Four.css";

function Four() {
  return (
    <div className="level-4-div" style={{backgroundColor: `${calculateColourRGB([255,0,0], 10)}`}}>
      <AnswerAndHintBox />
    </div>
  );
}

export default Four;
