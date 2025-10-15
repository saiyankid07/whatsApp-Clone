const mongoose = require("mongoose");
const userSchema = new mongooes.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

// The userSchema defines the fields: username, email, and password.

// required: true means a user cannot be created without this field.

// unique: true ensures no two users can have the same username or email.

// { timestamps: true } is a useful option that automatically adds createdAt and updatedAt fields to your user data.
