const express = require("express");
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const { addCategory, getCategory } = require("../controller/category");
const {
  adminMiddleware,
  requireSignIn,
} = require("../middlewares/auth");

router.post("/category/create", requireSignIn, adminMiddleware, addCategory);
router.get("/category/getCategory", getCategory);

module.exports = router;
