import React, { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import AbilitiesCard from "../components/AbilitiesCard";
import Description from "../components/Description";

export default function InfoBox({ match }) {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const [currentPokemon, setCurrentPokemon] = useState({
    sprites: {},
  });

  const fetchPokemon = async () => {
    const fetchPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${match.params.pokemonName}`
    );
    const pokemon = await fetchPokemon.json();
    console.log(pokemon);
    setCurrentPokemon(pokemon);
  };

  return <section className="infoBox">LOL</section>;
}
