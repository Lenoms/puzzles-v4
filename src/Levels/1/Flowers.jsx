import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import { Flower } from "./Flower";
import { Friend } from "./Friend";
import "./Flowers.css";
import { generateFlowers } from "./Flowers.service";

function Flowers() {
  const flowers = generateFlowers(50)
  return (
    <div className="level-flowers-div">
      <AnswerAndHintBox />
      {flowers.map((flower) => {
        return <div className="flower-container" style={{top: flower.top, left: flower.left}}>
          <Flower colour={flower.colour}/>
        </div>
      })}
      <Friend top={22} left={0} colour={'crimson'}/>
      <Friend top={58} left={22} colour={'yellow'} />
      <Friend top={18} left={36} colour={'aqua'} />
      <Friend top={55} left={55} colour={'purple'} />
      <Friend top={20} left={70} colour={'green'} />

    </div>
  );
}

export default Flowers;
