import React, { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import AbilitiesCard from "../components/AbilitiesCard";
import Description from "../components/Description";
import { render } from "@testing-library/react";

export default function InfoBox({ match }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPokemon();
  }, []);

  const [currentPokemon, setCurrentPokemon] = useState({
    name: "",
    abilities: [],
    sprites: {},
    stats: [
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
    ],
  });

  const fetchPokemon = async () => {
    setLoading(true);
    const fetchPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${match.params.pokemonName}`
    );
    const pokemon = await fetchPokemon.json();
    setCurrentPokemon(pokemon);
    setLoading(false);
  };

  if (loading) {
    return (
      <section
        className="infoBox"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>Welcome to POKEDEX!</h1>
        <br />
        <p>You can check information about every Pokemon here.</p>
      </section>
    );
  }

  return (
    <section className="infoBox">
      <Pokemon
        name={currentPokemon.name.toUpperCase()}
        image={currentPokemon.sprites.front_default}
      />
      <AbilitiesCard stats={currentPokemon.stats} />
      <Description
        height={currentPokemon.height}
        weight={currentPokemon.weight}
        abilities={currentPokemon.abilities}
      />
    </section>
  );
}
