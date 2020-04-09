import React from "react";

export default function PokemonList({ pokemons }) {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon) => (
        <div key={pokemon} className="pokemonIndex">
          {pokemon}
        </div>
      ))}
    </div>
  );
}
