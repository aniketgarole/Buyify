const mongoose = require("mongoose");

// Cart Schema
const orderSchema = mongoose.Schema({
  // category: String,
  // subCategory: String,
  // brand: String,
  // title: String,
  // offerPrice: Number,
  // originalPrice: Number,
  // discount: String,
  // quantity: Number,
  // images: Array,
  // size: Array,
  // rating: Number,
  // ratingCount: String,
  totalPrice : Number,
  authorId : String,
  time : String
});

// Cart Model
const OrderModel = mongoose.model("order", orderSchema);

// export
module.exports = {
  OrderModel,
};
