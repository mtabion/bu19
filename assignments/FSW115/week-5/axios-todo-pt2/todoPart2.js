var todos = [];

function loadTodos() {
  axios.get("https://api.vschool.io/melvin/todo").then(response => {
    showData(response.data);
    todos = response.data;
    //console.log(response);
  });
}
function addNewTodo() {
  console.log("Adding to do...");
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;
  console.log("value: " + title);
  console.log("description_1: " + description);
  console.log("price: " + price);

  axios({
    method: "post", //you can set what request you want to be
    url: "https://api.vschool.io/melvin/todo",
    data: {
      title: title,
      price: price,
      description: description
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
      //"Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log("ERROR");
      console.log(error);
    });
}
function checkBoxChecked(todoIndexNumber) {
  //Mark a particular todo as completed
  //Get the Todo we're talking about
  var todo = todos[todoIndexNumber];
  //Set the completed property to true
  todo.completed = true;
  //Create a variable to store the id of the Todo
  var id = todo._id;

  //Make the put request to the server to tell them we completed a todo
  //Create the URL using String templates
  var url = "https://api.vschool.io/melvin/todo/" + id;
  //Use Axios to make the PUT request
  axios.put(url, todo).then(response => {
    console.log(response);

    //We should problably strike through the text on the screen to show it's done
  });
}
function deleteTodo(todoIndexNumber) {
  var todo = todos[todoIndexNumber];
  //Set the completed property to true
  //Create a variable to store the id of the Todo
  var id = todo._id;

  //Make the put request to the server to tell them we completed a todo
  //Create the URL using String templates

  var url = "https://api.vschool.io/melvin/todo/" + id;

  axios.delete(url).then(response => {
    console.log(response);
  });
}

function updateTodo() {}

function showData(todos) {
  for (let i = 0; i < todos.length; i++) {
    console.log();

    let div = document.createElement("div");
    div.classList.add("todo-entry");

    let title = document.createElement("h1");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let button = document.createElement("button");
    button.setAttribute("onclick", "deleteTodo(" + i + ")");
    button.innerText = "Delete";
    //<button>Delete</button>

    title.textContent = todos[i].title;
    description.textContent = todos[i].description;

    //image.src = todos[i].imgUrl;
    // image.alt = todos[i].title;
    // // height="42" width="42"
    // image.height = "42";
    // image.width = "52";

    // check if todo item (todos[i]) is completed
    if (todos[i].completed) {
      // Apply css to strike through
      // Add a class name to whatever you want to strike through
      title.classList.add("strikethrough");
      description.classList.add("strikethrough");
    } else {
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("onchange", "checkBoxChecked(" + i + ")");
      div.appendChild(checkbox);
    }

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);
    document.body.appendChild(div);
  }
}
