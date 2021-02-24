// Dependencies 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

// Configure the server
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect();

// Routes
app.get("/", (req, res) => {

});

app.get("/", (req, res) => {
    
});

app.post("", (req, res) => {

});

