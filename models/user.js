const mongoose = require("mongoose");
const validator = require('validator');

const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: value => {
        return validator.isEmail(value);
      },
      message: `{VALUE} is not valid email!`
    }
  },
  password: {
      type: String,
      required: true,
      minlength: 6
  }
});

module.exports = { User };
