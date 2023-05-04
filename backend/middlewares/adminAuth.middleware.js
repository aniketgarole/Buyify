

const jwt = require("jsonwebtoken")

const adminAuth = (req,res,next) => {
    const token = req.headers.token;
   if(token){
    try{
        jwt.verify(token,"EZ",(err,decoded)=>{
            if(decoded){
                next();
            }else{
                res.status(200).send({msg : "Please Login (Admin)"})
            }
        })
    }catch(err){
        res.status(400).send(err)
    }
   }else{
    res.status(200).send("Please Login (Admin)")
   }
};



module.exports = {
    adminAuth
}