const express = require("express");
const User = require("../models/user");
const {signup,signin} = require('../controller/user');

//Express Router
const router = express.Router();

//Sign up route
router.post("/signup", signup);

//sign in route
router.post("/signin", signin);





module.exports = router;
