const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require('./routes/user');

//Initiating express app
const app = express();

//setting up env variable
env.config();

//parsing json response
app.use(express.json());

//Connecting MongoDb database
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.10kst.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
).then(() => {
    console.log('Database Connected');
})

//Routes middleware
app.use('/api',userRoutes);


//listening to port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
