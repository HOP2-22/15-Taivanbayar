const mongoose = require('mongoose')
const Post = require('./Posts')
const User = require('./Users')

const Schema = mongoose.Schema


const CommentSchema = new Schema({
    message : {type : String, required: true, maxWidth : [300, "must be less than 300 characters"]},
    owner : {type : String, required: true },
    posts : {type : Array, required: true },
    publishDate : {type : String, default: new Date() }
})

const Comment = mongoose.model("comments", CommentSchema);

module.exports = Comment;   
