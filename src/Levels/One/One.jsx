import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import { Flower } from "./Flower";
import "./One.css";
import { generateFlowers } from "./One.service";

function One() {
  const flowers = generateFlowers(50)
  return (
    <div className="level-1-div">
      <AnswerAndHintBox />
      {flowers.map((flower) => {
        return <div className="flower-container" style={{top: flower.top, left: flower.left}}>
          <Flower colour={flower.colour}/>
        </div>
      })}
    </div>
  );
}

export default One;
