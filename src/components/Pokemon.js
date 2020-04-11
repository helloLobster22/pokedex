import React from "react";

export default function Pokemon(props) {
  return (
    <div className="pokemon">
      <h2 className="pokemonName">{props.name}</h2>
      <img alt="pokemon" src={props.image}></img>
    </div>
  );
}
