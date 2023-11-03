import Book from "./Book";
import "./Bookshelf.css";

function Bookshelf() {
  const books = [
    { colour: "green", height: 60 },
    { colour: "blue", height: 50 },
    { colour: "purple", height: 80 },
    { colour: "yellow", height: 75 },
    { colour: "green", height: 70 },
    { colour: "red", height: 90 },
    { colour: "pink", height: 55 },
    { colour: "yellow", height: 40 },
    { colour: "grey", height: 70 },
    { colour: "black", height: 40 },
    { colour: "green", height: 60 },
  ];
  return (
    <div className="bookshelf-container">
      <div className="bookshelf-shelf">
        {books.map((book) => (
          <Book colour={book.colour} height={book.height} />
        ))}
      </div>
      <div className="bookshelf-shelf"></div>
      <div className="bookshelf-shelf"></div>
    </div>
  );
}

export default Bookshelf;
