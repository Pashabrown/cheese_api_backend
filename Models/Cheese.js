const { Schema, model } = require('mongoose');
///////////////////////////////
// MODELS
////////////////////////////////
const CheeseSchema = new Schema(
  {
  name: String,
  origin: String,
  image: String,
  grade: Number,
  },
    { timestamps: true }
);

const Cheese = model("Cheese", CheeseSchema);

module.exports = Cheese;