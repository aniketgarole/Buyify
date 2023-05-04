

const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const { adminRoute } = require("./routes/adminAuth.routes");
const { userRoute } = require("./routes/userAuth.routes");
const { adminProductRoute } = require("./routes/adminProducts.routes");
const { adminAuth } = require("./middlewares/adminAuth.middleware");
const { userProductRoute } = require("./routes/userProducts.routes");
require ("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin",adminRoute);
app.use("/user",userRoute);

app.use("/adminProduct", adminProductRoute);
app.use("/userProduct", userProductRoute);




app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected with database!!");
    }catch(err){
        console.log(err);
    }

    console.log(`Server running on port ${process.env.port}!!`);

})