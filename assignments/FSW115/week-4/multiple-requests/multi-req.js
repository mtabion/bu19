// Get requests with axios
// url: https://api.vschool.io/scrimbalessons/todo

//const axios = require("axios");

document.getElementById("page1-request").addEventListener("click", function() {
  let element = document.getElementById("list");
  element.innerHTML = "";
  // document.getElementById("demo").innerHTML = "Hello World";
  // Get All Chuck Norris Jokes
  axios
    .get("https://api.chucknorris.io/jokes/search?query=norris")
    .then(function(response) {
      console.log(response.data);
      let jokes = response.data.result;

      // Iterate response.data
      // Loop over the array
      for (let index = 0; index < 10; index++) {
        let random = Math.floor(Math.random() * (jokes.length - 1));
        console.log(jokes[index].value);
        let liElement = document.createElement("li");
        liElement.innerText = jokes[random].value;
        element.appendChild(liElement);
      }
    })
    .catch(error => console.log(error));
});

// Get One
// axios.get("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(response => {
//         for(let i = 0; i < response.data.length; i++){
//             const h1 = document.createElement('h1')
//             h1.textContent = response.data[i].title
//             document.body.appendChild(h1)
//         }
//     })
//     .catch(error => console.log(error))

// <p>
//         Show page
//             <span onclick="show('Page1');">1</span>,
//             <span onclick="show('Page2');">2</span>,
//             <span onclick="show('Page3');">3</span>.
//         </p>

//     <div id="Page1" class="page" style="">
//         Content of page 1
//     </div>
//     <div id="Page2" class="page" style="display:none">
//         Content of page 2
//     </div>
//     <div id="Page3" class="page" style="display:none">
//         Content of page 3
//     </div>
