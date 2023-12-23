import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import "./Castle.css";
import castle from './CastleImage.png'
import path from './PathImage.png'
import cabbageCart from './CabbageCartImage.png'
import house from './HouseImage.png'

function Castle() {
  return (
    <div className="level-castle-div">
      <AnswerAndHintBox />
      <div className="sky"></div>
      <div className="castle-images-container">
        <img className="castle-image" src={castle}></img>
        <img className="path-image" style={{width: "100%"}} src={path}></img>
        <img className="cabbage-cart-image" src={cabbageCart}></img>
      </div>
      <div className="village-images-container">
        <div className="village-road"></div>
      <img className="house-image" src={house}></img>
      <img className="house-image" src={house}></img>
      <img className="house-image" src={house}></img>
      </div>

    </div>
  );
}

// Put the colour of the letters in order on a flag or something

export default Castle;
