const pokeData = {
  url: 'https://pokeapi.co/api/v2/pokemon/',
  id: '1',
}
const apiUrl = document.getElementById(pokeData.url) + '/' + document.getElementById(pokeData.id);'

console.log(apiUrl);
