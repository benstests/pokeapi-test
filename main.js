const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()
P.getPokemonByName("eevee")
  .then(function(response) {
    console.log(response)
  })
