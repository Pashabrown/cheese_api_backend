///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
// require("dotenv").config();
//Im creating a new variable called port 
//wich should equal this same name is  this object 
//but if the property does not exist then default to the port 3000
// pull this property PORT from this object .env, give default value of 3000 
//destructiuring const {variable = position} = object 
// const { PORT = 3000 } = process.env;
// import express
//I want to make a variable called express to hold express and I 
//app object takes care of all of our routes
// const express = require("express");
// IMPORT DATABASE CONNECTION
// const mongoose = require("./db/connection");
// IMPORT MERCED LOGGER
// const { log } = require("mercedlogger");
// IMPORT ROUTER
// const IndexRouter = require("./Routes/index");

//////////////////////
// APP OBJECT
//////////////////////
// create application object
// const app = express();

/////////////////////////
// MIDDLEWARE
/////////////////////////

// app.use(express.json());
//cors adds 4 headers to every outgoing request
//if it doesnt see the headers then the browser kills the request
// app.use(cors()); // Prevent Cors Errors if building an API
// app.use(methodOverride("_method")); // Swap method of requests with _method query
// app.use(express.static("public")); // serve the public folder as static
//morgan just console.log stuff based on every request
// app.use(morgan("tiny")); // Request Logging/allows us to log messages 
// app.use(express.json()); // Parse json bodies
// app.use(express.urlencoded({ extended: false })); //parse bodies from form submissions
// SESSION MIDDLEWARE REGISTRATION (adds req.session property)

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
//just to make sure that my server is working
//means this is a get route -to our home route = in the url 

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

//////////////////////
// ROUTES
//////////////////////

//Index Router
// app.use("/", IndexRouter);

//////////////////////
// LISTENER
//////////////////////

// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
// Why? cause it's the largest 16-bit integer, fun fact!
// But because we are "elite" coders we will use 1337
// app.listen(PORT, () =>
//   log.white("🚀 Server Launch 🚀", `Listening on Port ${PORT}`)
// );



///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
// pull MONGODB_URL from .env
const { PORT = 3000, MONGODB_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// // import mongoose
// const mongoose = require("mongoose");
// import middlware
const cors = require("cors");
const morgan = require("morgan");
// IMPORT ROUTER
const IndexRouter = require("./Routes/index");
//MONGO CONNECTION
const mongoose = require("./db/connection");


///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
// mongoose.connect(MONGODB_URL, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });
// // Connection Events
// mongoose.connection
//   .on("open", () => console.log("Your are connected to mongoose"))
//   .on("close", () => console.log("Your are disconnected from mongoose"))
//   .on("error", (error) => console.log(error));

///////////////////////////////
// MODELS
////////////////////////////////
// const CheeseSchema = new mongoose.Schema({
//   name: String,
//   origin: String,
//   image: String,
//   grade: Number,
// });

// const Cheese = mongoose.model("Cheese", CheeseSchema);

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

// create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

//Index Router
app.use("/cheese", IndexRouter);

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
