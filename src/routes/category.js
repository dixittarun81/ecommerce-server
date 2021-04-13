const express = require("express");

const router = express.Router();

const {addCategory} = require('../controller/category');

console.log('a');

router.post('/category/create',addCategory);


module.exports = router;