const express = require("express");
const { getLink, createLink, goLink } = require("../controller/linkControl");
const { authenticateToken } = require("../middleware/verifying");

const linkRouter = express.Router();

linkRouter
  .get("/", authenticateToken, getLink)
  .post("/", authenticateToken, createLink)
  .get("/:id", authenticateToken, goLink);

module.exports = linkRouter;
