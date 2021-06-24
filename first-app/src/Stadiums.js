import React from "react";

const Stadiums = ({ NFLTeams }) => {
  return (
    <div>
      {NFLTeams.map((team) => (
        <div>
          <h2>{team.name}</h2>
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
