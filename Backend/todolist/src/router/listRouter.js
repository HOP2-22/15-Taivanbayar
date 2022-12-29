const express = require('express');
const { createList, getList } = require('../controller/listControl');

const listRouter = express.Router();

listRouter.post('/createList', createList).get("/getList", getList)

module.exports = listRouter;