
const express = require("express");
const { OrderModel } = require("../models/order.model");
const { userAuth } = require("../middlewares/userAuth.middleware");
const { adminAuth } = require("../middlewares/adminAuth.middleware");

const orderRouter = express.Router();


// Checking user Auth 
// orderRouter.use(userAuth);
// Get cart data 
orderRouter.get("/:id",adminAuth, async(req,res)=>{
    const {id} = req.params;
    const authorId = id;
    try{
        const data = await OrderModel.find({authorId});
        res.status(200).send(data)
    }catch(err){
        res.status(400).send({err});
    }
});

// add product into the cart
orderRouter.post("/addOrder",userAuth,async(req,res)=>{
    try{
        // console.log(req.body)
        const prod = new OrderModel(req.body);
        await prod.save();
        res.status(200).send({msg : "Order added"})
    }catch(err){
        res.status(400).send({err});
    }
});


// Delete product
orderRouter.delete("/delete/:id",adminAuth,async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await OrderModel.findOne({_id : id})
        if(req.body.authorId === user.authorId){
            await OrderModel.findByIdAndDelete({_id : id})
            res.status(200).send({msg : "Product deleted from order"})
        }else{
            res.status(400).send({err : "You are not a authorized person."});
        }
    }catch(err){
        res.status(400).send({err});
    }
});



// export 
module.exports = {
    orderRouter
}