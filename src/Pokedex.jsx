// component
import Languages from "./Languages";
import PokemonCard from "./PokemonCard";

// react hook
import { useState } from "react";

// custom hook
import { useGetPokemon } from "./useGetPokemon";

export default function Pokedex() {
  const pokemons = useGetPokemon();
  const [nameLanguage, setNameLanguage] = useState(() => {
    return "english";
  });
  console.log(nameLanguage);

  return (
    <div className="pokedex-container">
      <h1>pokedex</h1>

      <Languages setNameLanguage={setNameLanguage} />

      <div className="pokemon-card-wrapper">
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              img={pokemon.image}
              id={pokemon.id}
              name={pokemon.name}
              base={pokemon.base}
              type={pokemon.type}
              nameLanguage={nameLanguage}
            />
          );
        })}
      </div>
    </div>
  );
}
