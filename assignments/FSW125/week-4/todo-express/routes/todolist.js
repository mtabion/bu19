const express = require("express");
const app = express();
const uuid = require("uuid/v4");

app.use(express.json());

const todos = [
  {
    name: "The name",
    description: "description of todo",
    imageUrl: "http://anyimage",
    completed: false,
    _id: uuid()
  },
  {
    FirstName: "Luke",
    LastName: "Skywalker",
    Living: true,
    TodoAmount: 6000,
    Type: "Human",
    _id: uuid()
  },
  {
    FirstName: "Obees",
    LastName: "Ramee",
    Living: true,
    TodoAmount: 1000,
    Type: "Gran",
    _id: uuid()
  },
  {
    FirstName: "Onicrop",
    LastName: "K'Cin",
    Living: true,
    TodoAmount: 1500,
    Type: "Ugnaught",
    _id: uuid()
  },
  {
    FirstName: "Grillo",
    LastName: "Zammon",
    Living: true,
    TodoAmount: 4000,
    Type: "Aqualish",
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
  console.log(" ===================================== ");
  const updateTodo = Object.assign(todos[todoIndex], updateObject);
  res.send(updateTodo);
});

module.exports = app;
