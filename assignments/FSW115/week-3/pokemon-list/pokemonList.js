// const xhr = new XMLHttpRequest(); step-1
// xhr.onreadystatechange step-2
// xhr.readyState
// xhr.status
// xhr.responseText
// xhr.open() step-3
// xhr.send() step-4
// url: https://api.vschool.io/pokemon
//api.vschool.io/pokemon

const xhr = new XMLHttpRequest();
// method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    const pokemons = data.objects[0].pokemon;
    //console.log(pokemons);
    showData(pokemons);
  }
};

function showData(pokemonArray) {
  for (let i = 0; i < pokemonArray.length; i++) {
    console.log(pokemonArray[i]);
    var div = document.createElement("div");
    div.textContent = pokemonArray[i].name;
    document.body.appendChild(div);
  }
}
// function showData(pokemonArray) {
//   for (let i = 0; i < pokemonArray; i++) {
//     const div = document.createElement("div");
//     const pokemonName = document.createTextNode(pokemon.name);
//     pokemon.appendChild(pokemonName);
//     document.body.appendChild(div);
//   }
// }
//   for (let i = 0; i < pokemonArray.length; i++) {
//     const pokemon = pokemonArray[i];
//     const div = document.createElement("div");
//     const pokemonName = document.createTextNode(pokemon.name);
//     pokemon.appendChild(pokemonName);
//     document.appendChild(div);
//   }
// }

// function showData(pokemonArray) {
//   for (let i = 0; i < pokemonArray.length; i++) {
//     const div = document.createElement("div");
//     div.textContent = pokemonArray[i].name;
//     document.body.appendChild(div);
//   }
// }
