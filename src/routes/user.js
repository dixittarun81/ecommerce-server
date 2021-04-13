const express = require("express");
const User = require("../models/user");
const {signup,signin,requireSignIn} = require('../controller/user');

//Express Router
const router = express.Router();

//Sign up route
router.post("/signup", signup);

//sign in route
router.post("/signin", signin);

router.post("/profile", requireSignIn, (req,res) => {
    res.status(200).json({user : 'profile'});
});





module.exports = router;
