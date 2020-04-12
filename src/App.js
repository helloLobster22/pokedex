import React, { useState, useEffect } from "react";
import axios from "axios";
import BrowseBox from "./containers/BrowseBox";
import InfoBox from "./containers/InfoBox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=964"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(13);
  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [activeMobile, setActiveMobile] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setPokemons(res.data.results);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  function NextPage() {
    if (
      currentPage < Math.ceil(pokemons.length / pokemonsPerPage) &&
      currentPage < Math.ceil(filteredPokemons.length / pokemonsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  }

  function PrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // for current pokemons
  let indexOfLastPokemon = currentPage * pokemonsPerPage;
  let indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  let currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  function handleInput(input) {
    setCurrentPage(1);
    setSearchPokemon(input.target.value);
  }

  let filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.startsWith(searchPokemon);
  });

  // for filtered
  let indexOfLastPokemonSearched = currentPage * pokemonsPerPage;
  let indexOfFirstPokemonSearched =
    indexOfLastPokemonSearched - pokemonsPerPage;
  let currentPokemonsSearched = filteredPokemons.slice(
    indexOfFirstPokemonSearched,
    indexOfLastPokemonSearched
  );

  function activeMobileFunc() {
    setActiveMobile(!activeMobile);
  }

  if (loading) return "Loading..";

  return (
    <Router>
      <div className="pokedex">
        <BrowseBox
          pokemons={
            searchPokemon !== "" ? currentPokemonsSearched : currentPokemons
          }
          toNextPage={NextPage}
          toPrevPage={PrevPage}
          handleInput={handleInput}
          activeMobileFunc={activeMobileFunc}
          isActive={activeMobile}
        />
        <div className="right">
          <Switch>
            <Route path="/" exact component={InfoBox} />
            <Route path="/:pokemonName" component={InfoBox} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
