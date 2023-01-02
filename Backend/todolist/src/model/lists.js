const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    description: {type: String},
    text: {type: String},
})

const List = mongoose.model("lists", ListSchema)

module.exports = List;