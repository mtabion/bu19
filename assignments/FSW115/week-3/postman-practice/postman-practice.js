const xhr = new XMLHttpRequest();
// method  // url                     // async?
xhr.open("GET", "https://swapi.co/api/planets/", true);
xhr.send();

xhr.onreadystatechange = function() {
  console.log("onReadyStateChange");
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("200 ok");
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    const planets = data.results;
    console.log(planets);
    showData(planets);
  }
};

function showData(planets) {
  for (let i = 0; i < planets.length; i++) {
    console.log(planets[i]);
    var div = document.createElement("div");
    div.textContent = planets[i].name;
    document.body.appendChild(div);
  }
}
