import './App.css'
import PokemonCard from './components/PokemonCard'

const PokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc: "",
      
    },
  ];

 
function App() {
 
const pokemon = PokemonList[0] 
   
  
 
  return (
    <div className="App">
      <div>
        <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc}/>
      </div>
    </div>
  )
}




export default App

