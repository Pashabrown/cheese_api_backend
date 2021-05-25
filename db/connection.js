///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();

/////////////////////////////////////
// MONGOOSE CONNECTION
/////////////////////////////////////
const { MONGODB_URL } = process.env;
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const DB = mongoose.connection;

mongoose.connect(MONGODB_URL, config);

DB.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose;