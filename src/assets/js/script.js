const pdex= document.querySelector('#pokedex') , result = document.querySelector('#result')
const linkApi = 'https://pokeapi.co/api/v2/pokemon/'
let idPokemon;
function gerarNumeroAleatorio() {
    idPokemon = Math.floor(Math.random() * 1010) + 1;
    return Promise.resolve(idPokemon);
}
function Pokedex (){
    fetch(`${linkApi}${idPokemon}`)
    .then(res => res.json())
    .then(pokemon =>{
        var pokemonName = pokemon.name;
        var pokemonTipo = pokemon.types.map(type => type.type.name).join(', '); 
        var pokemonAltura = pokemon.height/10;
        var pokemonPeso = pokemon.weight/10;
        var pokemonHabilidade = pokemon.abilities.map(ability => ability.ability.name).join(', ')
        var pokemonRegiao = pokemon.pokemon_species;
        var pokemonSprite = pokemon.sprites.front_default;
        result.innerHTML=`
        <h6 class="text-white text-center">Pokemon: ${pokemonName}</h6>
        <h6 class="text-white text-center">Tipo: ${pokemonTipo} </h6>
        <h6 class="text-white text-center">Peso: ${pokemonPeso} Kilos </h6>
        <h6 class="text-white text-center">Altura: ${pokemonAltura} Metros </h6>
        <h6 class="text-white text-center">Habilidades ${pokemonHabilidade} </h6>
        <img src="${pokemonSprite}" class="img-fluid w-25 mx-auto d-block" alt="Imagem do Pokémon">
        `  
    })
}
pdex.addEventListener('click',function(){
    gerarNumeroAleatorio().then(Pokedex)
})