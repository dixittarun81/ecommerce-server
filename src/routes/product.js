const express = require("express");
const router = express.Router();

//const { addCategory, getCategory } = require("../controller/category");
const { adminMiddleware, requireSignIn } = require("../middlewares/auth");
const Product = require('../models/product');

router.post("/product/create", requireSignIn, adminMiddleware, (req,res) => {
    
    res.status(200).json({message: 'Hello'});
    
});
//router.get("/category/getCategory", getCategory);

module.exports = router;
