var todos = [];

function loadTodos() {
  axios.get("https://api.vschool.io/melvin/todo").then(response => {
    showData(response.data), (todos = response.data);
  });
}

function loadAPIData() {
  console.log("Adding to todo list...");

  axios.get("https://rickandmortyapi.com/api/character").then(response => {
    console.log(response);
    let data = response.data.results;

    for (let i = 0; i < 5; i++) {
      let title = data[i].name;
      let description = data[i].status;
      let price = 0.0;
      let todo = { title: title, description: description, price: price };
      addToTodoList(todo);
    }
  });

  // Create 5 Todos using the 3rd Party API
}

function addToTodoList(todo) {
  axios({
    method: "post",
    url: "https://api.vschool.io/melvin/todo",
    data: {
      title: todo.title,
      price: todo.price,
      description: todo.description
    }
  })
    .then(response => {
      console.log("Created a new todo");
      console.log(response);
    })
    .catch(error => {
      console.log("ERROR");
      console.log(error);
    });
}

function addNewCharacter() {
  console.log("Adding to do...");
  //let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;
  //console.log("description_1: " + description);
  console.log("price: " + price);

  axios({
    method: "post",
    url: "https://api.vschool.io/melvin/todo",
    data: {
      title: "test",
      price: price,
      description: ""
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
  var todo = todos[todoIndexNumber];
  todo.completed = true;

  var id = todo._id;

  var url = "https://api.vschool.io/melvin/todo/" + id;

  axios.put(url, todo).then(response => {
    console.log(response);
  });
}
function deleteTodo(todoIndexNumber) {
  var todo = todos[todoIndexNumber];
  var id = todo._id;

  var url = "https://api.vschool.io/melvin/todo/" + id;

  axios.delete(url).then(response => {
    console.log(response);
  });
}

function updateCharacter(index, description) {
  //console.log(todos[index], description);
  var todo = todos[index];
  todo.description = description;

  var id = todo._id;

  var url = "https://api.vschool.io/melvin/todo/" + id;

  axios.put(url, todo).then(response => {
    console.log(response);
  });
}

function showData(todos) {
  for (let i = 0; i < todos.length; i++) {
    //console.log(todos[i].price);

    axios
      .get(`https://rickandmortyapi.com/api/character/${todos[i].price}`)
      .then(response => {
        console.log(response);
        let div = document.createElement("div");
        div.classList.add("todo-entry");

        let characterID = document.createElement("h3");
        let characterName = document.createElement("h1");
        let description = document.createElement("input");
        description.onblur = function(event) {
          updateCharacter(i, event.target.value);
        };
        description.placeholder = "Notes...";
        let price = document.createElement("p");
        let button = document.createElement("button");
        description.classList.add("test");
        button.classList.add("delete-button");
        button.setAttribute("onclick", "deleteTodo(" + i + ")");
        button.innerText = "Delete";

        let button_edit = document.createElement("button");
        button_edit.setAttribute("onclick", "updateTodo(" + i + ")");
        button_edit.innerText = "Edit";
        //<button>Delete</button>

        characterID.textContent = todos[i].price;
        characterName.textContent = response.data.name;
        description.value = todos[i].description;

        div.appendChild(characterID);
        div.appendChild(characterName);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(button);

        document.body.appendChild(div);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

// headers: {
//   "Access-Control-Allow-Origin": "*",
//   "Content-Type": "application/json"
// "Content-Type": "application/x-www-form-urlencoded"
//}
