const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const path = require('path');


const userRoutes = require('./routes/user');
const adminRoutes = require("./routes/auth/admin");
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

//Initiating express app
const app = express();

//setting up env variable
env.config();

//parsing json response
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));


//Connecting MongoDb database
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.10kst.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
).then(() => {
    console.log('Database Connected');
})

//Routes middleware
app.use('/api',userRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);




//listening to port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
