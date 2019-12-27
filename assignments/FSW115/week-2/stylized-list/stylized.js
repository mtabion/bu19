const rootDiv = document.getElementById("root");

let request = new XMLHttpRequest();
request.open("GET", "https://swapi.co/api/people/?format=json", true);
request.onload = function() {
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    let myArr = JSON.parse(request.responseText);

    rootDiv.innerHTML += "<ul>";
    for (i = 0; i < myArr.results.length; i++) {
      var styleString = "";

      if (i % 2 == 0) {
        styleString = "even-list-item";
      } else {
        styleString = "odd-list-item";
      }

      rootDiv.innerHTML +=
        '<li class="' + styleString + '">' + myArr.results[i].name + "</li>";
    }
    rootDiv.innerHTML += "</ul>";
  } else {
    document.write("not working");
  }
};
request.send();
