const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/route");
const app = express();
const port = 8300;

mongoose.connect(
  "mongodb+srv://Taivnaa032:88448634@cluster0.qxmgpix.mongodb.net/to-do-list?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", ()=> {
  console.log("Connected to Mongo")
})

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
