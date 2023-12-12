import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import "./Castle.css";
import castle from './CastleImage.png'

function Castle() {
  return (
    <div className="level-castle-div">
      <AnswerAndHintBox />
      <div className="castle-container">
      <img src={castle}></img>
      </div>
    </div>
  );
}

export default Castle;
