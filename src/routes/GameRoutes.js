import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Library from "../Library/Library";
import One from "../Levels/one/One";
import Two from "../Levels/two/Two";

function GameRoutes() {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/puzzles-v4" element={<Library />} />
      <Route exact path="/puzzles-v4/one" element={<One />} />
      <Route exact path="/puzzles-v4/two" element={<Two />} />
    </Routes>
  );
}

export default GameRoutes;
