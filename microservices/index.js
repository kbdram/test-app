import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/customerRoutes";

//variable declaration
//const express = require("express");
//const mongoose = require("mongoose");
const app = express();

//mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/e-courses", {
  useNewUrlParser: true,
});

//configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

routes(app);

app.listen(3000, () => {
  console.log("Backend Server is Running");
});
