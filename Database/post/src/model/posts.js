const mongoose = require("mongoose");
const { default: isURL } = require("validator/lib/isURL");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String, required: true },
  image: { type: String, required: true, validate: [isURL, "please upload an image"]},
  likes: { type: Number, default: 0, required: true },
  tags: { type: Array, required: true },
  publishDate: { type: Date, default: new Date(), required: true },
  ownerId: { type: String, unique: true, required: true},
});

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
