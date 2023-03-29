
const NavBar = ({PokemonList,pokemonIndex,setPokemonIndex}) => {

    const handleClickIncre = () => {
        if (pokemonIndex < PokemonList.length - 1)
            setPokemonIndex(pokemonIndex + 1)
    }

    const handleClickDecre = () => {
        if (pokemonIndex > 0)
            setPokemonIndex(pokemonIndex - 1)

    }
    return (
        <div>
            <button onClick={handleClickDecre}>Previous</button>
            <button onClick={handleClickIncre}>Next</button>
        </div>
    )
}

export default NavBar