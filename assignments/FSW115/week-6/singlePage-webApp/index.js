async function getAllRickAndMortyCharacters() {
  const charactersResponse = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );
  console.log(charactersResponse);
  for (let i = 0; i < charactersResponse.data.results.length; i++) {
    console.log(charactersResponse.data.results[i].name);
    var name = charactersResponse.data.results[i].name;
    var nameDiv = document.createElement("div");
    nameDiv.classList.add("row");
    nameDiv.classList.add("content-row");
    nameDiv.innerText = name;
    document.getElementById("characters-column").appendChild(nameDiv);
  }
}

function getAllRickAndMortyEpisodes() {
  axios.get("https://rickandmortyapi.com/api/episode").then(Response => {
    for (let i = 0; i < Response.data.results.length; i++) {
      console.log(Response.data.results[i].name);
      var name = Response.data.results[i].name;
      var nameDiv = document.createElement("div");
      nameDiv.classList.add("row");
      nameDiv.classList.add("content-row");
      nameDiv.innerText = name;
      document.getElementById("episodes-column").appendChild(nameDiv);
    }
  });
}

async function getAllRickAndMortyLocations() {
  const locationsResponse = await axios.get(
    "https://rickandmortyapi.com/api/location"
  );
  for (let i = 0; i < locationsResponse.data.results.length; i++) {
    console.log(locationsResponse.data.results[i].name);
    var name = locationsResponse.data.results[i].name;
    var nameDiv = document.createElement("div");
    nameDiv.classList.add("row");
    nameDiv.classList.add("content-row");
    nameDiv.innerText = name;
    document.getElementById("locations-column").appendChild(nameDiv);
  }
}

getAllRickAndMortyCharacters();
getAllRickAndMortyEpisodes();
getAllRickAndMortyLocations();
