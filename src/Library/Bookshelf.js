import Book from "./Book";
import "./Bookshelf.css";
import { getRandomBookValues } from "./Library.service";

function Bookshelf() {
  const bookshelves = [
    getRandomBookValues(20),
    getRandomBookValues(20),
    getRandomBookValues(20),
  ];
  return (
    <div className="bookshelf-container">
      {bookshelves.map((bookshelf, i) => (
        <div className="bookshelf-shelf">
          {bookshelves[i].map((book) => (
            <Book colour={book.colour} height={book.height} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Bookshelf;
