// https://api.vschool.io/<yourname>/todo[/<todoId>]
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/melvin/todo", true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    console.log(data);
    const todos = data;
    //console.log(pokemons);
    showData(todos);
  }
};

function showData(todos) {
  for (let i = 0; i < todos.length; i++) {
    console.log();

    let div = document.createElement("div");
    let title = document.createElement("h1");
    let description = document.createElement("p");
    let image = document.createElement("img");
    title.textContent = todos[i].title;
    description.textContent = todos[i].description;
    image.src = todos[i].imgUrl;
    image.alt = todos[i].title;
    // height="42" width="42"
    image.height = "42";
    image.width = "52";

    // check if todo item (todos[i]) is completed
    if (todos[i].completed) {
      // Apply css to strike through
      // Add a class name to whatever you want to strike through
      title.classList.add("strikethrough");
      description.classList.add("strikethrough");
    }

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(image);
    document.body.appendChild(div);
  }
}
