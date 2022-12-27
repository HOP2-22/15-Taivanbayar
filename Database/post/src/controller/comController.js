const { response } = require("express");
const Comment = require("../model/comment");

exports.getList = async (req, res) => {
  try {
    const posts = await Comment.find();
    res.send(posts);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.getListByPost = async (req, res) => {
  const post = req.params.id;
  try {
    const comments = await Comment.find({
        posts: post
    });
    res.send(comments);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.getListByUserComment = async (req, res) => {
  const user = req.params.id;
  try {
    const comments = await Comment.find();
    const userId = comments.filter((a) => a.owner == user);
    res.json({
      isDone: true,
      data: userId,
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.createComment = async (req, res) => {
  const com = req.body;
  try {
    await Comment.create(com);
    res.send({ message: "Created" });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.deleteComment = async (req, res) => {
  const _id = req.params.id;
  try {
    await Comment.findByIdAndDelete({ _id });
    res.send({ message: "Deleted" });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
