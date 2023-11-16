const pdex= document.querySelector('#pokedex') , result = document.querySelector('#result')
const linkApi = 'https://pokeapi.co/api/v2/'
let idPokemon;

function gerarNumeroAleatorio() {
    idPokemon = Math.floor(Math.random() * 1080) + 1;
}

function Pokedex (){
    fetch(`${linkApi}1`)
    .then(res => res.json())
    .then(pokemon =>{
        var pokemonName = pokemon.pokemon;
        var habilidade = pokemon.ability;
        var eggGroup = pokemon.egg-group;

        result.innerHTML=`<h4>Pokemon: ${pokemonName}</h4>
        <h5>Habilidade: ${habilidade}</h5>
        <h5>EggGroup: ${eggGroup}</h5>
        `
        
    })
}
pdex.addEventListener('click', Pokedex)