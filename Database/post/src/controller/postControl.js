const Post = require("../model/Posts");

exports.getList = async (req, resreq, res) => {
  try {
    console.log("Asdfasdf");
    const posts = await Post.find({});
    res.send({ posts: posts });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.getListByUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const userInfo = await Post.findById({ _id });
    res.send({ user: userInfo})
  } catch (error) {}
};

exports.getListByTag = async (req, res) => {};

exports.getPostById = async (req, res) => {};

exports.createPost = async (req, res) => {
  try {
    const post = req.body;
    await Post.create(post);
  } catch (error) {
    res.status(error.status).send(error.message);
  } 
};

exports.updatePost = async (req, res) => {
  const _id = req.params.id;
  const post = req.body;
  try {
    const updatedpost = await Post.findByIdAndUpdate({ _id }, post);
    res.send(updatedpost);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

exports.deletePost = async (req, res) => {
  const _id = req.params.id;
  try {
    const deletedpost = await Post.findByIdAndDelete({ _id });
    res.send(deletedpost);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};
