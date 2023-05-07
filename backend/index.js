

const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const { adminRoute } = require("./routes/adminAuth.routes");
const { userRoute } = require("./routes/userAuth.routes");
const { adminProductRoute } = require("./routes/adminProducts.routes");
const { userProductRoute } = require("./routes/userProducts.routes");
const { cartRouter } = require("./routes/cart.routes");
const { orderRouter } = require("./routes/order.routes");
require ("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin",adminRoute);
app.use("/user",userRoute);

app.use("/adminProduct", adminProductRoute);
app.use("/userProduct", userProductRoute);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);






app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected with database!!");
    }catch(err){
        console.log(err);
    }

    console.log(`Server running on port ${process.env.port}!!`);

})