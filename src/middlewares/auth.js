exports.requireSignIn = (req,res,next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
    
}

