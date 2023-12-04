import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Library from "../Library/Library";
import One from "../Levels/one/One";
import Two from "../Levels/two/Two";
import Three from "../Levels/three/Three";
import Four from "../Levels/four/Four";

function GameRoutes() {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/puzzles-v4" element={<Library />} />
      <Route exact path="/puzzles-v4/one" element={<One />} />
      <Route exact path="/puzzles-v4/two" element={<Two />} />
      <Route exact path="/puzzles-v4/three" element={<Three />} />
      <Route exact path="/puzzles-v4/four" element={<Four />} />
    </Routes>
  );
}

export default GameRoutes;
