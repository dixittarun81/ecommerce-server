const express = require("express");
const {signup,signin} = require('../../controller/auth/auth');
const {validateSignupRequest,validateSigninRequest, isRequestValidated} = require('../../validators/auth');

//Express Router
const router = express.Router();

//Sign up route
router.post("/admin/signup",validateSignupRequest,isRequestValidated, signup);

//sign in route
router.post("/admin/signin",validateSigninRequest, isRequestValidated, signin);


module.exports = router;