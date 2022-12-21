const express = require("express");
const router = require("./router/routes");
const app = express();
const port = 8200;
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to Mongo");
});

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
