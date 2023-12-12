import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import { Torch } from "./Torch";
import { useEffect, useState } from "react"
import "./Torches.css";
import { letterMapping } from "./Torches.constants";

function Torches() {
    const [torchArray, setTorchArray] = useState([false,false,false,false])

    const handleToggle = (index, state) => {
        const newTorchArray = [...torchArray]
        newTorchArray[index] = state;
        setTorchArray(newTorchArray);
    }

    useEffect(() => {
        const decimalValue = parseInt(torchArray.map(Number).join(''), 2);

        document.getElementsByClassName('level-torches-answer-container')[0].innerHTML=letterMapping[decimalValue]

    }, [torchArray])
    return (
        <div className="level-torches-div">
            <AnswerAndHintBox />
            <div className="torch-container">
                <Torch index={0} handleToggle={handleToggle}/>
                <Torch index={1} handleToggle={handleToggle}/>
                <Torch index={2} handleToggle={handleToggle}/>
                <Torch index={3} handleToggle={handleToggle}/>
            </div>
            <div className="level-torches-answer-container"></div>
        </div>
    );
}

export default Torches;
