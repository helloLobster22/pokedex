import React from "react";
import { NavLink } from "react-router-dom";
import Pokemon from "./Pokemon";

export default function PokemonList(props) {
  let pokemonList = "pokemonList";

  if (props.isActive) {
    pokemonList += " active";
  }

  function reloadPlease() {
    window.location.reload();
  }

  return (
    <div className={pokemonList} onClick={reloadPlease}>
      {props.pokemons.map((pokemon) => (
        <NavLink to={`/${pokemon.name}`} key={pokemon.name}>
          <div className="pokemonIndex">{pokemon.name}</div>
        </NavLink>
      ))}
    </div>
  );
}
