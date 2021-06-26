import React from "react";
import PokeImg from "./PokeImg";
import "./Pokecard.css";

const Pokecard = ({ pokemon }) => {
  return (
    <>
      {pokemon.map((poke) => (
        <div className="Pokecard">
          <h2 className="Pokecard-name">{poke.name}</h2>
          <PokeImg pokeId={poke.id} />
          <h3>Type: {poke.type}</h3>
          <h4>Exp: {poke.base_experience}</h4>
        </div>
      ))}
    </>
  );
};

export default Pokecard;
