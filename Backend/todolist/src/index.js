const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8600;
const cors = require("cors");
const listRouter = require("./router/listRouter");
app.use(cors());
app.use(express.json());
app.use("/list",listRouter)

mongoose.connect(
  "mongodb+srv://Taivnaa032:88448634@cluster0.qxmgpix.mongodb.net/to-do-list?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
