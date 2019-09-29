const express = require("express");

const _ = require("lodash");
const bodyParser = require("body-parser");

const app = express();

const { mongoose } = require("./db/mongodb");
const db = mongoose.connection;

const { Todos } = require("./models/todoItems");
const {User} = require("./models/user")

db.once("open", () => {
  console.log("Database Connected Successfully");
});

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server connected to localhost!");
});

//  CREATING APIS

// GET
app.get("/getTodos", (req, res) => {
  Todos.find()
    .then(s => res.status(200).send(s))
    .catch(c => res.status(400).send());
});

// POST
app.post("/postTodos", (req, res) => {
  const item = new Todos({ item: req.body.item });

  item
    .save()
    .then(s => res.status(200).send(s))
    .catch(e => res.status(400).send(e));
});

// DELETE
app.delete("/deleteTodos/:id", (req, res) => {
  const id = req.params.id;

  Todos.findByIdAndRemove(id)
    .then(s => res.status(200).send(s))
    .catch(e => res.status(400).send(e));
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  let body = _.pick(req.body, ["item"]);

  Todos.findOneAndUpdate(id, { $set: body },{returnNewDocument: true})
    .then(s => res.status(200).send())
    .catch(e => res.status(400).send());

  console.log(body);
});


// USERS
app.post("/users", (req, res) => {
  const body = _.pick(req.body, ["email", "password"])
  const user = new User(body)

  user.save().then(s => res.send(user))
  .catch(e => res.status(400).send(e))

})

