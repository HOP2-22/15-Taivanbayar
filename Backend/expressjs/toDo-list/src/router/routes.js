const express = require('express');
const { showLists, createLists, deleteItems, updateItems } = require('../controller/listControl');
const router = express.Router();


router.post('/', createLists).get('/', showLists).delete("/", deleteItems).put("/", updateItems)

module.exports = router