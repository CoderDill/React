import React from "react";
import "./App.css";
import Stadiums from "./Stadiums";
import NFLTeams from "./NFLTeams";


function App() {
  return (
    <div>
      <Stadiums NFLTeams={NFLTeams} />
    </div>
  );
}

export default App;
