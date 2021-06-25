import React from "react";
import "./App.css";
import Stadiums from "./Stadiums";
import NFLTeams from "./NFLTeams";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting />
      <Stadiums NFLTeams={NFLTeams} />
    </div>
  );
}

export default App;
