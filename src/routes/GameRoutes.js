import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Library from "../Library/Library";
import Four from "../Levels/4/Four";
import Flowers from "../Levels/1/Flowers";
import Colours from "../Levels/3/Colours";
import Torches from "../Levels/11/Torches";
import Castle from "../Levels/2/Castle";
import Matrix from "../Levels/8/Matrix";

function GameRoutes() {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/puzzles-v4" element={<Library />} />
      <Route exact path="/puzzles-v4/one" element={<Flowers />} />
      <Route exact path="/puzzles-v4/two" element={<Castle />} />
      <Route exact path="/puzzles-v4/three" element={<Colours />} />
      <Route exact path="/puzzles-v4/four" element={<Four />} />
      <Route exact path="/puzzles-v4/eight" element={<Matrix />} />
      <Route exact path="/puzzles-v4/eleven" element={<Torches />} />
    </Routes>
  );
}

export default GameRoutes;
