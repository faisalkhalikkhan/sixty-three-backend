const mongoose = require("mongoose");
const newUser = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  contactNo: Number,
  address: String,
});
const User = mongoose.model("User", newUser);
module.exports = User;
