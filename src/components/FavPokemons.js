import React from "react";
import pokeball from "../assets/pokeballBig.svg";

export default function FavPokemons(props) {
  return (
    <div className="fav" onClick={props.activeMobileFunc}>
      <img
        alt="Icons made by https://www.flaticon.com/authors/nikita-golubev"
        src={pokeball}
        className="favPokeball"
      ></img>
      <div className="pokeballShadow"></div>
    </div>
  );
}
