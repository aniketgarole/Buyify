

const jwt = require("jsonwebtoken")

const userAuth = (req,res,next) => {
    const token = req.headers.token;
   if(token){
    try{
        jwt.verify(token,"EZ",(err,decoded)=>{
            if(decoded){
                // console.log(decoded)
                req.body.authorId = decoded.authorId;
                req.body.name = decoded.name;
                next();
            }else{
                res.status(200).send({msg : "Please Login (User)"})
            }
        })
    }catch(err){
        res.status(400).send(err)
    }
   }else{
    res.status(200).send("Please Login (User)")
   }
};



module.exports = {
   userAuth
}