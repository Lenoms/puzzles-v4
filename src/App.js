import "./App.css";
import GameRoutes from "./routes/GameRoutes";

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
        <GameRoutes />
      </div>
    </div>
  );
}

export default App;
