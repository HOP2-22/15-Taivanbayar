const mongoose = require("mongoose");
// const User = require("./Users");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String },
  image: { type: String },
  likes: { type: Number, default: 0 },
  tags: { type: Array },
  publishDate: { type: Date, default: new Date() },
  // owner: {
  //   ref: "user",
  //   type: Schema.ObjectId,
  //   required: true,
  // },
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
