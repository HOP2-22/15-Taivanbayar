const express = require("express");
const {
  createUser,
  getUsers,
  Login,
  getUser,
} = require("../controller/userControl");
const { authenticateToken } = require("../middleware/verifying");

const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .post("/login/:email", authenticateToken, getUser)
  .post("/signup", createUser)
  .post("/login", Login);

module.exports = userRouter;
