import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'

const PokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {

  const  [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = PokemonList[pokemonIndex]

  const handleClickIncre = () => {
    if (pokemonIndex<PokemonList.length-1)
    setPokemonIndex(pokemonIndex + 1)
  }

  const handleClickDecre = () => {
    if (pokemonIndex>0)
    setPokemonIndex(pokemonIndex - 1)
  }



return (
  <div className="App">
    <div>
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
      <button onClick={handleClickDecre}>Previous</button>
      <button onClick={handleClickIncre}>Next</button>
      
     </div>
  </div>
)
}





export default App

