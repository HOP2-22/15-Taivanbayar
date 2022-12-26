const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/user.router");
const postRouter = require("./router/post.router");
const User = require("./model/Users");
const commentRouter = require("./router/comment.router");
const tagRouter = require("./router/tags.router");
const app = express();
app.use(express.json());
const port = 8600;

mongoose.connect(
  "mongodb+srv://Taivnaa032:88448634@cluster0.qxmgpix.mongodb.net/BlogPost?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to Mongo");
});
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
app.use(tagRouter)

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
