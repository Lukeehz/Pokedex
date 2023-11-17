const pdex= document.querySelector('#pokedex') , result = document.querySelector('#result')
const linkApi = 'https://pokeapi.co/api/v2/pokemon/'
let idPokemon;

function gerarNumeroAleatorio() {
    idPokemon = Math.floor(Math.random() * 100) + 1;
    return Promise.resolve(idPokemon);
}

function Pokedex (){
    fetch(`${linkApi}${idPokemon}`)
    .then(res => res.json())
    .then(pokemon =>{
        var pokemonName = pokemon.name;
        var pokemonAltura = pokemon.height/10;
        var pokemonPeso = pokemon.weight/10;
        var pokemonSprite = pokemon.sprites.front_default;


        result.innerHTML=`<h4 class="text-white text-center">Pokemon: ${pokemonName}</h4>
        <h4 class="text-white text-center">Peso: ${pokemonAltura} Metros</h4>
        <h4 class="text-white text-center">Altura: ${pokemonPeso} Kilos</h4>
        <img src="${pokemonSprite}" class="img-fluid w-50 mx-auto d-block" alt="Imagem do Pokémon">
        `
        
    })
}
pdex.addEventListener('click',function(){
    gerarNumeroAleatorio().then(Pokedex)
})