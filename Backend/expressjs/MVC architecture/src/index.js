const express = require("express");

const router = require("./router/routes");
const app = express();
const port = 8100;


app.use(router)

app.listen(port, () => {
  console.log(`hey ${port} listening`);
});