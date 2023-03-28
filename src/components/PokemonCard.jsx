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

function PokemonCard (){
        const Pokemon = PokemonList[0];
    
          
            if ((Pokemon.imgSrc) === "" ){
                return (
                <figure>
                <p> ???? </p>
                <figcaption>{Pokemon.name}</figcaption>
            </figure>)
            
            }
            else {
                return (
            <figure>
                <img src={Pokemon.imgSrc}
                    alt={Pokemon.name}></img>
               <figcaption>{Pokemon.name}</figcaption>
           </figure>)}

         ;
}


  
export default PokemonCard;