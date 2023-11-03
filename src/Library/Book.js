import "./Book.css";

function Book(props) {
  return (
    <div
      className="book"
      style={{ backgroundColor: props.colour, height: `${props.height}%` }}
    ></div>
  );
}

export default Book;
