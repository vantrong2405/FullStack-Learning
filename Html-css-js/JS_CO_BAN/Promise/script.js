console.log("start downloading pokemons");

const pokemonPromise = fetch(
    "http://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200" //link api pokeapi.co
);

console.log(typeof pokemonPromise); //kiểu object 

console.log(pokemonPromise)

pokemonPromise
    .then(response => {
        return response.json(); //trạng thái ban đầu 
    })
    .then(data => console.log(data)) //in data
    .catch(err => console.log(err)) //in lỗi

console.log("finish downloading pokemons");