const express = require("express");
const router = express.Router();


const {
  userMiddleware,
  requireSignIn,
} = require("../middlewares/auth");

const {addItemToCart} = require('../controller/cart');

router.post("/user/cart/addToCart", requireSignIn, userMiddleware, addItemToCart);


module.exports = router;
