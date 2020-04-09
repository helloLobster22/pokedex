import React from "react";
import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";
import FavPokemons from "../components/FavPokemons";

export default function BrowseBox({ pokemons, toNextPage, toPrevPage }) {
  return (
    <section className="browseBox">
      <FavPokemons />
      <PokemonList pokemons={pokemons}></PokemonList>
      <Pagination toNextPage={toNextPage} toPrevPage={toPrevPage} />
    </section>
  );
}
