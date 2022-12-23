const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String},
    age: {type: Number},
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
