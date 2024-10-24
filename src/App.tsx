import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrev = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonIndex > 0 ? <button onClick={handleClickPrev}>Précédent</button> : <button style={{display: "none"}}></button>}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button> : <button style={{display: "none"}}></button>}

    </div>
  );
}



export default App;