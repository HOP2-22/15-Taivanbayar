const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/routes");
const app = express();
const port = 8400;

mongoose.connect(
  "mongodb+srv://Taivnaa032:88448634@cluster0.qxmgpix.mongodb.net/blog?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", ()=> {
  console.log("Connected to Mongo")
})

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
