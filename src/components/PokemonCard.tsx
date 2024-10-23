function PokemonCard() {

    const pokemon = pokemonList[0];

    return (
    <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
};

const pokemonList = [
    {
        name: "Bulbasaur",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "Mew",
    },
];

export default PokemonCard;