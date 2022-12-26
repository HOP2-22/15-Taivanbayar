const mongoose = require('mongoose')
const Post = require('./Posts')
const User = require('./Users')

const Schema = mongoose.Schema


const CommentSchema = new Schema({
    message : {type : String },
    owner : {type : String},
    posts : {type : String},
    publishDate : {type : String, default: new Date()}
})

const Comment = mongoose.model("comments", CommentSchema);

module.exports = Comment;   