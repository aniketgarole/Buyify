const express = require("express");
const { ProductsModel } = require("../models/products.model");
const { adminAuth } = require("../middlewares/adminAuth.middleware");
const { userAuth } = require("../middlewares/userAuth.middleware");
const adminProductRoute = express.Router();


// Get Product Data
adminProductRoute.get("/", async (req, res) => {
  try {
    const data = await ProductsModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ err });
  }
});

// Admin Auth check
adminProductRoute.use(adminAuth);

// Add Product
adminProductRoute.post("/addProduct", async (req, res) => {
  try {
    const product = new ProductsModel(req.body);
    await product.save();
    res.status(200).send({ msg: "Product Added Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});


// Update/Patch Product
adminProductRoute.patch("/patch/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductsModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Product Updated/Patched Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});


// Update/Put Product
adminProductRoute.put("/put/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductsModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Product Updated/Puted Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});


// Delete Product
adminProductRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductsModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product Deleted Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});


// export productRoute
module.exports = {
  adminProductRoute,
};
