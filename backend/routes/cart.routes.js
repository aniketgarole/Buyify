
const express = require("express");
const { CartModel } = require("../models/Cart.model");
const { userAuth } = require("../middlewares/userAuth.middleware");

const cartRouter = express.Router();


// Checking user Auth 
cartRouter.use(userAuth);
// Get cart data 
cartRouter.get("/",async(req,res)=>{
    try{
        const data = await CartModel.find({authorId : req.body.authorId});
        res.status(200).send(data)
    }catch(err){
        res.status(400).send({err});
    }
});

// add product into the cart
cartRouter.post("/addCart",async(req,res)=>{
    try{
        const prod = new CartModel(req.body);
        await prod.save();
        res.status(200).send({msg : "Product added to cart"})
    }catch(err){
        res.status(400).send({err});
    }
});


// Delete product
cartRouter.delete("/delete/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await CartModel.findOne({_id : id})
        if(req.body.authorId === user.authorId){
            await CartModel.findByIdAndDelete({_id : id})
            res.status(200).send({msg : "Product deleted from cart"})
        }else{
            res.status(400).send({err : "You are not a authorized person."});
        }
    }catch(err){
        res.status(400).send({err});
    }
});



// export 
module.exports = {
    cartRouter
}