const express = require("express");
const jwt = require("jsonwebtoken")
const { UserModel } = require("../models/userAuth.model");
const bcrypt = require("bcrypt");
const userRoute = express.Router();

// See All Users
userRoute.get("/", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

// User Registration
userRoute.post("/addUser", (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({ name, email, password: hash, contact });
      await user.save();
      res.status(200).send({ msg: "User Added Successfully!!" });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// User Login;
// userRoute.use(adminAuth)
userRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.find({ email });
    bcrypt.compare(password, user[0].password, (err, pass) => {
      if (pass) {
        console.log(user)
        const token = jwt.sign({authorId : user[0]._id, name : user[0].name}, "EZ")
        res.status(200).send({ msg: "Login Successfull!!", token, name : user[0].name});
      } else {
        res.status(200).send({ err: "Wrong Details" });
      }
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// export
module.exports = {
  userRoute,
};
