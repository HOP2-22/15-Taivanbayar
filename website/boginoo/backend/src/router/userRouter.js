const express = require('express');
const { createUser, getUsers, Login } = require('../controller/userControl');

const userRouter = express.Router();

userRouter.get("/", getUsers).post("/singup", createUser ).post("/login", Login)

module.exports = userRouter;