import Book from "./Book";
import "./Bookshelf.css";
import { getRandomBookValues, levelExistsAtBookIndex } from "./Library.service";

function Bookshelf(props) {
  const bookshelves = [
    getRandomBookValues(20),
    getRandomBookValues(20),
    getRandomBookValues(20),
  ];

  return (
    <div className="bookshelf-container">
      {bookshelves.map((bookshelf, i) => (
        <div className="bookshelf-shelf">
          {bookshelves[i].map((book, j) => (
            <Book
              colour={book.colour}
              height={book.height}
              level={
                levelExistsAtBookIndex(props.bookshelfLevels, i, j) !== -1
                  ? props.bookshelfLevels[
                      levelExistsAtBookIndex(props.bookshelfLevels, i, j)
                    ].name
                  : null
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Bookshelf;
