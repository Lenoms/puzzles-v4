import { useState } from "react";
import "./Friend.css";
export function Friend(props) {
  const [dialogueShown, setDialogueShown] = useState(false);

  const toggleDialogue = () => {
    setDialogueShown(!dialogueShown);
  };

  return (
    <div
      className="friend-container"
      style={{
        position: "absolute",
        top: `${props.top}%`,
        left: `${props.left}%`,
      }}
      onClick={() => toggleDialogue()}
    >
      <div className="friend">
        <div className="friend-head">
          <div className="friend-eyes">
            <div className="friend-eye"></div>
            <div className="friend-eye"></div>
          </div>
          <div className="friend-mouth"></div>
        </div>
        <div
          className="friend-body"
          style={{ backgroundColor: `${props.colour}` }}
        ></div>
        <div className="friend-legs">
          <div className="friend-leg"></div>
          <div className="friend-leg"></div>
        </div>
      </div>
      {dialogueShown && (
        <div className="friend-dialogue-box">
          <div className="friend-dialogue-box-point"></div>
        </div>
      )}
    </div>
  );
}
