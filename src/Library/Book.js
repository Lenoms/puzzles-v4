import "./Book.css";

function Book(props) {
  return (
    <div
      className="book"
      style={{
        background: props.colour,
        background: `linear-gradient(180deg, ${props.colour} 0%, rgb(0, 0, 0) 100%)`,
        height: `${props.height}%`,
      }}
    ></div>
  );
}

export default Book;
