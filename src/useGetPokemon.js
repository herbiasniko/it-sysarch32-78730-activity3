import { useEffect, useState } from "react";

export function useGetPokemon() {
  const [pokemons, setPokemon] = useState(() => []);
  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return pokemons;
}
