const express = require("express");
const { ProductsModel } = require("../models/products.model");
// const { userAuth } = require("../middlewares/userAuth.middleware");
const userProductRoute = express.Router();

// Get product data using query.
userProductRoute.get("/", async (req, res) => {
  try {
    const q = req.query;

    // Getting data from req.query and after getting the data i am also deleting that data becouse i have to take care other Querys
    let sortData, page, limit, order, min, max;
    if (q.sort || q.page || q.limit || q.order || q.min || q.max) {
      sortData = q.sort;
      page = q.page;
      limit = q.limit;
      order = q.order;
      min = q.min;
      max = q.max;

      delete q.sort;
      delete q.page;
      delete q.limit;
      delete q.order;
      delete q.min;
      delete q.max;
    }

    // paginaton and min max thing.
    if (!page) page = 1;
    // if (!limit) limit = 20;
    if(!min) min = 0;
    if(!max) max = +Infinity
    const skip = (page - 1) * 10;
    const data = await ProductsModel.find({
      $and: [
        { ...q },
        {
          offerPrice: { $gt: min, $lt: max },
        },
      ],
    })
      .skip(skip)
      .limit(limit);

    // sorting
    const newData = data.sort((a, b) => {
      if (order == 1) {
        return a[sortData] - b[sortData];
      } else {
        return b[sortData] - a[sortData];
      }
    });

    res.status(200).send(newData);
  } catch (err) {
    res.status(400).send({ err });
  }
});

// Get Data By Id.
userProductRoute.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ProductsModel.findOne({ _id: id });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ err });
  }
});

userProductRoute.get("/search/:key", async (req, res) => {
  try {
    const data = await ProductsModel.find({
      $or: [
        { title: { $regex: req.params.key } },
        { brand: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
      ],
    });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ err });
  }
});

// export productRoute.
module.exports = {
  userProductRoute,
};
