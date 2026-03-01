const express = require("express");
const mongoose = require("mongoose");



const app = express();


app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

mongoose.connect("mongodb+srv://admin:UGf2uRoeiUU5tQIi@cluster0.8avlaz4.mongodb.net/")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch((err) => console.log(err));
//UGf2uRoeiUU5tQIi