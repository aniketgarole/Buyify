const mongoose = require("mongoose");

// Products Schema
const productsSchema = mongoose.Schema({
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
});

// Products Model
const ProductsModel = mongoose.model("product", productsSchema);

// export
module.exports = {
  ProductsModel,
};
