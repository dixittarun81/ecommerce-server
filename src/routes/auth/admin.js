const express = require("express");
const {signup,signin} = require('../../controller/auth/auth');

//Express Router
const router = express.Router();

//Sign up route
router.post("/admin/signup", signup);

//sign in route
router.post("/admin/signin", signin);


module.exports = router;