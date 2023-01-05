const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : {type: String},
    password : {type: Number}
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
