const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  age: { type: Number },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
