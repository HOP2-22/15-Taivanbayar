const Post = require("../model/Posts");

exports.getList = async (req, res) => {
  const posts = await Post.find({});
  res.send({ posts: posts });
};

exports.getListByUser = async (req, res) => {
  const user = req.params.id;
  try {
    const posts = await Post.find({
      ownerId: user
    });
    res.send({ posts: posts });
  } catch (error) {
    res.send({ error: error.message });
  }
};

exports.getListByTag = async (req, res) => {
  const tags = req.params.id;
  try {
    const posts = await Post.find({ tags: tags });
    res.send(posts);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.getPostById = async (req, res) => {
  const _id = req.params.id;
  try {
    const userInfo = await Post.findById({ _id });
    res.send({ user: userInfo });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

exports.createPost = async (req, res) => {
  const post = req.body;
  try {
    console.log("==> ", post);
    await Post.create(post);
    res.send({
      status: 200,
    });
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
