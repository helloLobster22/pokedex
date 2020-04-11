import React from "react";
import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";
import Search from "../components/Search";
import FavPokemons from "../components/FavPokemons";

export default function BrowseBox(props) {
  return (
    <section className="browseBox">
      <FavPokemons />
      <Search handleInput={props.handleInput} />
      <PokemonList pokemons={props.pokemons}></PokemonList>
      <Pagination toNextPage={props.toNextPage} toPrevPage={props.toPrevPage} />
    </section>
  );
}
