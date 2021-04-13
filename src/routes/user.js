const express = require("express");
const User = require("../models/user");
const {signup,signin,requireSignIn} = require('../controller/user');
const {validateSignupRequest,validateSigninRequest, isRequestValidated} = require('../validators/auth');

//Express Router
const router = express.Router();

//Sign up route
router.post("/signup",validateSignupRequest,isRequestValidated, signup);

//sign in route
router.post("/signin",validateSigninRequest,isRequestValidated, signin);

router.post("/profile", requireSignIn, (req,res) => {
    res.status(200).json({user : 'profile'});
});





module.exports = router;
