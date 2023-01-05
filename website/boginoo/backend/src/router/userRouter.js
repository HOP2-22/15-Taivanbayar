const express = require('express');
const { createUser, getUsers } = require('../controller/userControl');

const userRouter = express.Router();

userRouter.post("/signup", createUser ).get("/", getUsers)

module.exports = userRouter;