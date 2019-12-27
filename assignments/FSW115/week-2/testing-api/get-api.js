function getData() {
  fetch("https://swapi.co/api/starships/5/")
    .then(res => res.json)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
getData();
