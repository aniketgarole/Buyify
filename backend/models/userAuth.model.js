const mongoose = require("mongoose");

// User Schema
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contact: String,
});

// User Model
const UserModel = mongoose.model("userAuth", userSchema);

// export
module.exports = {
  UserModel,
};
