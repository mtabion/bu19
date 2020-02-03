// var axios = require("axios");

document.getElementById("get-jokes").addEventListener("click", function() {
  let element = document.getElementById("list");
  element.innerHTML = "";
  // document.getElementById("demo").innerHTML = "Hello World";
  // Get All Chuck Norris Jokes
  axios
    .get("https://api.chucknorris.io/jokes/search?query=norris")
    .then(function(response) {
      // console.log(response.data);
      let jokes = response.data.result;

      // Iterate response.data
      // Loop over the array
      for (let index = 0; index < 10; index++) {
        let random = Math.floor(Math.random() * (jokes.length - 1));
        // console.log(jokes[index].value);
        let liElement = document.createElement("li");
        let pElement = document.createElement("p");
        let spanElement = document.createElement("span");
        spanElement.innerText = index + 1;
        pElement.innerText = jokes[random].value;
        liElement.appendChild(spanElement);
        liElement.appendChild(pElement);
        element.appendChild(liElement);
      }
    })
    .catch(error => console.log(error));
});
