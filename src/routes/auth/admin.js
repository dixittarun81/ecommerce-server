const express = require("express");
const {signup,signin,signout} = require('../../controller/auth/auth');
const {validateSignupRequest,validateSigninRequest, isRequestValidated} = require('../../validators/auth');
const {requireSignIn} = require('../../middlewares/auth');

//Express Router
const router = express.Router();

//Sign up route
router.post("/admin/signup",validateSignupRequest,isRequestValidated, signup);

//sign in route
router.post("/admin/signin",validateSigninRequest, isRequestValidated, signin);

//sign-out route
router.post('/admin/signout', signout);


module.exports = router;