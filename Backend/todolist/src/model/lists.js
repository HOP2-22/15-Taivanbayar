const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    text: {type: String},
    description: {type: String},
})

const List = mongoose.model("lists", ListSchema)

module.exports = List;