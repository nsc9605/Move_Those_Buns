// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
// Require info from .env file
require("dotenv").config();

const db = require("./models");
const app = express();

// Configure the server
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(
  // process.env.MONGODB_URI || 'mongodb://localhost/MoveThoseBuns',
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Mongoose is connected");
  }
);
// Use/require routes files
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
