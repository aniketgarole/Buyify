

const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const { adminRoute } = require("./routes/adminAuth.routes");
const { userRoute } = require("./routes/userAuth.routes");
const { productRoute } = require("./routes/products.routes");
require ("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin",adminRoute);
app.use("/user",userRoute);


app.use("/adminProduct",productRoute);



app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected with database!!");
    }catch(err){
        console.log(err);
    }

    console.log(`Server running on port ${process.env.port}!!`);

})