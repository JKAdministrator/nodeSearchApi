const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "must provide a name"],
  },
  price: {
    type: Number,
    require: [true, "must provide a price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  raiting: {
    type: Number,
    default: 4.5,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    //enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model("Product", productSchema);
