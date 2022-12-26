const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String },
  image: { type: String },
  likes: { type: Number, default: 0 },
  tags: { type: Array },
  publishDate: { type: Date, default: new Date() },
  owner: { type: String}
});

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
