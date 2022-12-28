const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/user.router");
const postRouter = require("./router/post.router");
const commentRouter = require("./router/comment.router");
const tagRouter = require("./router/tags.router");
const app = express();
app.use(express.json());
const port = 8500;

mongoose.connect(
  "mongodb+srv://Taivnaa032:88448634@cluster0.qxmgpix.mongodb.net/BlogPost?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to Mongo");
});
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/tag", tagRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
