const listDiv = document.getElementById(list);

function getData() {
  fetch("https://swapi.co/api/starships/5/")
    .then(res => res.json())
    .then(res => console.log("Res: " + JSON.stringify(res)))
    .catch(err => console.log("Error: " + err));
}
getData(fetch);
