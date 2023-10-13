import { useEffect } from "react";
import "./App.css";
import One from "./Levels/1/One";

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
        <One />
      </div>
    </div>
  );
}

export default App;
