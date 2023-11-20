import { useState } from 'react'
import AnswerAndHintBox from "../../components/AnswerAndHintBox";
import ColourWizard from './ColourWizard'
import Dot from './Dot'
import { dotArray, wizardAnswer, wizardText } from './Three.constants'
import './Three.css'

function Three () {
    const [showWizardText, setShowWizardText] = useState(false)

    const toggleText = () => {
        setShowWizardText(!showWizardText)
    }

    return <div className='level-3-div'>
         <AnswerAndHintBox />
        {dotArray.map((dotRow) => {
           return <div className='dot-row'>
            {dotRow.map((dot) => {
               return <Dot colour={dot.colour} letter={dot.letter} />
            })}
           </div>
        })}
        <div className='colour-wizard-box' onClick={toggleText}>
            <ColourWizard />
            {showWizardText && <div className='colour-wizard-text'>{wizardText} <br/><br/> {wizardAnswer}</div>}
        </div>
    </div>
}

export default Three