const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/routes.user");
const postRouter = require("./router/routes.post");
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

app.use(postRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
