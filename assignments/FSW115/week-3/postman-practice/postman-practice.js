const xhr_planets = new XMLHttpRequest();
const xhr_person = new XMLHttpRequest();

// ========================================= GET LIST OF PLANETS ==================================

//method           //url                 //async
xhr_planets.open("GET", "https://swapi.co/api/planets/", true);
xhr_planets.send();

// ========================================= GET ONE PERSON ==================================
xhr_person.open("GET", "https://swapi.co/api/people/13/", true);
xhr_person.send();

// ========================================= Planets onreadystatechange ==================================
xhr_planets.onreadystatechange = function() {
  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log("onReadyStateChange");
  if (xhr_planets.readyState === 4 && xhr_planets.status === 200) {
    console.log("200 ok");
    const JSONdata = xhr_planets.responseText;
    const data = JSON.parse(JSONdata);
    console.log("data: " + JSON.stringify(data));
    const results = data.results;
    showPlanets(results);
  }
};

// ========================================= Person onreadystatechange ==================================
xhr_person.onreadystatechange = function() {
  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log("onReadyStateChange");
  if (xhr_person.readyState === 4 && xhr_person.status === 200) {
    console.log("200 ok");
    const JSONdata = xhr_person.responseText;
    const data = JSON.parse(JSONdata);
    console.log("data: " + JSON.stringify(data));
    const results = data;
    showPerson(results);
  }
};

// ========================================= showPlanets ==================================
function showPlanets(planets) {
  var title = document.createElement("h1");
  title.innerHTML = "Planets";
  document.body.appendChild(title);
  for (let i = 0; i < planets.length; i++) {
    console.log(planets[i]);
    var div = document.createElement("div");
    div.textContent = planets[i].name;
    document.body.appendChild(div);
  }
}

// ========================================= showPerson ==================================
function showPerson(person) {
  var title = document.createElement("h1");
  title.innerHTML = "Person";
  document.body.appendChild(title);
  console.log();
  var div = document.createElement("div");
  div.textContent = person.name;
  document.body.appendChild(div);
}
