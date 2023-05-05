const mongoose = require("mongoose");

// Cart Schema
const cartSchema = mongoose.Schema({
  category: String,
  subCategory: String,
  brand: String,
  title: String,
  offerPrice: Number,
  originalPrice: Number,
  discount: String,
  quantity: Number,
  images: Array,
  size: Array,
  rating: Number,
  ratingCount: String,
  authorId : String
});

// Cart Model
const CartModel = mongoose.model("cart", cartSchema);

// export
module.exports = {
  CartModel,
};
