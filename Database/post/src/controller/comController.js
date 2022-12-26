const { response } = require("express");
const Comment = require("../model/comment");

exports.getList = async (req, res) => {
    try {
        const posts = await Comment.find();
        response.send(posts)
    } catch (error) {
        res.status(404).send(error.message);
    }
}
// exports.getListByPost = async (req, res) => {
//     try {
        
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// }
// exports.getListByUser = async (req, res) => {
//     try {
        
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// }
exports.createComment = async (req, res) => {
    const com =req.body;
    try {
        await Comment.create(com)
    } catch (error) {
        res.status(404).send(error.message);
    }
}
exports.deleteComment = async (req, res) => {
    const _id = req.params.id;
    try {
        await Comment.findByIdAndDelete({ _id })
    } catch (error) {
        res.status(404).send(error.message);
    }
}