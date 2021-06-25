import React from "react";
import Logos from "./Logos";
import "./Logos.css";

const Stadiums = ({ NFLTeams }) => {
  return (
    <div>
      {NFLTeams.map((team) => (
        <div className="Logos">
          <h2 id={team.name}>{team.name}</h2>
          <Logos key={team.id} logo={team.logo} />
          <img src={team.img} alt="" />
          <ul>
            <li>Stadium: {team.stadium}</li>
            <li>Capacity: {team.capacity}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Stadiums;
