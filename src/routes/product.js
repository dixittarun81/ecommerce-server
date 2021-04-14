const express = require("express");
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');


const { adminMiddleware, requireSignIn } = require("../middlewares/auth");
const {createProduct} = require('../controller/product');

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname);
    }
})

const upload = multer({storage});

router.post("/product/create", requireSignIn, adminMiddleware, upload.array('productPicture'), createProduct );


module.exports = router; 
