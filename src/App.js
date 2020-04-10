import React, { useState, useEffect } from "react";
import axios from "axios";
import BrowseBox from "./containers/BrowseBox";
import InfoBox from "./containers/InfoBox";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNext(res.data.next);
        setPrev(res.data.previous);
        setPokemons(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [url]);

  function NextPage() {
    setUrl(next);
  }

  function PrevPage() {
    setUrl(prev);
  }

  //if (loading) return "Loading...";

  return (
    <div className="pokedex">
      <BrowseBox
        pokemons={pokemons}
        toNextPage={next ? NextPage : null}
        toPrevPage={prev ? PrevPage : null}
      />
      <InfoBox />
    </div>
  );
}

export default App;
