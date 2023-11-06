import "./Book.css";
import { useNavigate } from "react-router-dom";

function Book(props) {
  const navigate = useNavigate();
  const navigateIfLevelExists = () => {
    if (props.level) {
      navigate(`/puzzles-v4/${props.level}`);
    }
  };
  return (
    <div
      className="book"
      onClick={() => navigateIfLevelExists()}
      style={{
        background: props.colour,
        background: `linear-gradient(180deg, ${props.colour} 0%, rgb(0, 0, 0) 100%)`,
        height: `${props.height}%`,
      }}
    >
      {props.level}
    </div>
  );
}

export default Book;
