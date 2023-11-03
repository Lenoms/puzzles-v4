import "./App.css";
import Library from "./Library/Library";

function App() {
  return (
    <div className="App">
      <div
        className="app-level-container"
        style={{
          width: `${window.innerWidth}px`,
          height: `${window.innerHeight}px`,
        }}
      >
        <Library />
      </div>
    </div>
  );
}

export default App;
