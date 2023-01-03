const express = require("express");
const mongoose = require("mongoose");
const linkRouter = require("./router/routes");
const app = express();

const port = 8700;

mongoose.connect(
    "mongodb+srv://Taivnaa032:88448634@cluster0.qxmgpix.mongodb.net/test",
    { useNewUrlParser: true }
)

mongoose.connection.once("open", () => {
    console.log("Connected to Mongo")
});

app.use(express.json());
app.use(linkRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})