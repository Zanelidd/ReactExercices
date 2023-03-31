
const NavBar = ({ PokemonList, pokemonIndex, setPokemonIndex }) => {

    const choosePokemon = (index) => {
        setPokemonIndex((pokemonIndex = index))
        console.log(pokemonIndex)
    }



    return (

        <>
            {PokemonList.map((pokemonChosen, i) => (
                <button key={pokemonChosen.name} onClick={() => choosePokemon(i)} >{pokemonChosen.name}</button>)
            )}

        </>

    )



}


export default NavBar