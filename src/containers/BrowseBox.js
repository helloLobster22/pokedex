import React from "react";
import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";
import Search from "../components/Search";
import FavPokemons from "../components/FavPokemons";

export default function BrowseBox(props) {
  return (
    <section className="browseBox">
      <FavPokemons activeMobileFunc={props.activeMobileFunc} />
      <Search handleInput={props.handleInput} isActive={props.isActive} />
      <PokemonList
        pokemons={props.pokemons}
        isActive={props.isActive}
      ></PokemonList>
      <Pagination toNextPage={props.toNextPage} toPrevPage={props.toPrevPage} />
    </section>
  );
}
