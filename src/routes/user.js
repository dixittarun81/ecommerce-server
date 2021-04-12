const express = require("express");
const User = require("../models/user");
const {signup} = require('../controller/user');

//Express Router
const router = express.Router();

//sign in route
router.post("/signin", (req, res) => {});

//Sign up route
router.post("/signup", signup);

module.exports = router;
