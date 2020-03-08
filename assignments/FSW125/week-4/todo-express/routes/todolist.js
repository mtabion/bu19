const express = require("express");
const app = express();
const uuid = require("uuid/v4");

app.use(express.json());

const todos = [
  {
    name: "Pay bills",
    description: "Car loan payment",
    imageUrl:
      "https://www.kbb.com/articles/wp-content/uploads/2019/10/01-car-buying-600x450.jpg",
    completed: false,
    _id: uuid()
  },
  {
    name: "Go Groceries",
    description: "Make a list before going to Smith's",
    imageUrl:
      "https://image.shutterstock.com/image-photo/groceries-bag-fruit-260nw-298838690.jpg",
    completed: false,
    _id: uuid()
  },
  {
    name: "Gun range",
    description: "Spend an hour shooting practice",
    imageUrl:
      "https://www.provo.org/Home/ShowPublishedImage/5333/635169221954070000",
    completed: false,
    _id: uuid()
  },
  {
    name: "Chores",
    description: "Cut branches off tree",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5is_Aj_EY-YYk2TWJqjX4HvR2TlYqCRfsAc4u0WtCQTp8KV4S",
    completed: false,
    _id: uuid()
  },
  {
    name: "Car maintenance",
    description: "Oil change on Jeep",
    imageUrl:
      "https://www.wayalife.com/photos/_data/i/upload/2018/04/12/20180412110547-cca3f94c-me.jpg",
    completed: false,
    _id: uuid()
  }
];

// Get all
app.get("/list", (req, res, next) => {
  res.send(todos);
  next();
});

// get one
app.get("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const foundTodo = todos.find(todo => todo._id === todoId);
  res.send(foundTodo);
});

// Post one
app.post("/", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuid();
  todos.push(newTodo);
  res.send(`Successfully added ${newTodo.FirstName} to the database!`);
});

// Delete one
app.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex(todo => todo._id === todoId);
  todos.splice(todoIndex, 1);
  res.send("Sucuccessfully deleted todo");
});

// Update one
app.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const updateObject = req.body;
  console.log(" ");
  console.log(" ");
  console.log("Todo ID: " + todoId);
  const todoIndex = todos.findIndex(todo => todo._id === todoId);
  console.log("todoIndex: " + todoIndex);
  console.log("updateObject: " + JSON.stringify(updateObject));
  console.log("todos[todoIndex]: " + JSON.stringify(todos[todoIndex]));
  console.log(" ");
  console.log(" ");
  const updateTodo = Object.assign(todos[todoIndex], updateObject);
  res.send(updateTodo);
});

module.exports = app;
