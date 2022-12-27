const express = require('express');
const { getListOfTag } = require('../controller/tagController');

const tagRouter = express.Router();

tagRouter.get('/', getListOfTag);

module.exports = tagRouter;