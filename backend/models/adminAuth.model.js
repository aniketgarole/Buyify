const mongoose = require("mongoose");

// Admin Schema
const adminSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contact: String,
});

// Admin Model
const AdminModel = mongoose.model("adminAuth", adminSchema);

//export
module.exports = {
  AdminModel,
};
