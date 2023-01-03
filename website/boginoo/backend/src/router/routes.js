const express = require('express');
const { getLink, createLink } = require('../controller/linkControl');

const linkRouter = express.Router();

linkRouter.get('/', getLink).post('/', createLink)

module.exports = linkRouter