import React from "react";
import { NavLink } from "react-router-dom";
import Pokemon from "./Pokemon";

export default function PokemonList(props) {
  return (
    <div className="pokemonList">
      {props.pokemons.map((pokemon) => (
        <NavLink to={`/${pokemon.name}`} key={pokemon.name}>
          <div className="pokemonIndex">{pokemon.name}</div>
        </NavLink>
      ))}
    </div>
  );
}
