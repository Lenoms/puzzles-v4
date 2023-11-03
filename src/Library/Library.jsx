import Bookshelf from "./Bookshelf";
import "./Library.css";

function Library() {
  return (
    <div className="library-container">
      <div className="library-ceiling">
        <div className="light"></div>
        <div class="flame"></div>
      </div>
      <div className="bookshelf-row">
        <Bookshelf />
        <Bookshelf />
      </div>
      <div className="library-floor"></div>
    </div>
  );
}

export default Library;
