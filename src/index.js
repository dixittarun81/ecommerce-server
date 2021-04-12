const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");

//Initiating express app
const app = express();

//setting up env variable
env.config();

app.use(express.json());

//Connecting MongoDb database
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.10kst.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('Database Connected');
})

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Server",
  });
});

app.post("/data", (req, res, next) => {
  res.status(200).json({
    msg: req.body,
  });
});

//listening to port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
