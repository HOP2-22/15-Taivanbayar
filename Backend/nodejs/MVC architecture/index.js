const express = require("express");

// const { getUsers, createUsers } = require("./controller/users");
const router = require("./router/routes");
const app = express();
const port = 8100;


app.use("./router/routes", router)

app.listen(port, () => {
  console.log(`hey ${port} listening`);
});
