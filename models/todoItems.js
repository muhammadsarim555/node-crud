const mongoose = require("mongoose");

// const TodosShema = new mongoose.Schema("Todos", {
//   item: {
//     type: String,
//     required: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   }
// });

const Todos = mongoose.model("Todo", {
  item: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

module.exports = { Todos };
