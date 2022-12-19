const express = require("express");
const router = require("./router/routes");
const app = express();
const port = 8200;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
