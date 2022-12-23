const Post = require("../model/posts");

exports.getList = async (req, res) => {
  try {
    console.log("Asdfasdf");
    const posts = await Post.find({});
    res.send({ posts: posts });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
