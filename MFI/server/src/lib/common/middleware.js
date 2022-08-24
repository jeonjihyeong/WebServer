const jwt = require("jsonwebtoken");
const token = require("./token")

const validateToken = async(req,res,next)=>{
    let accessToken = req.headers.authorization;
    console.log("미들웨어 동작")
    try{
        if(accessToken === null) {
            res.send({data : "need Token"})
            return;
        }
        if(!await token.verifyToken(accessToken)){
            res.send({message : "expired token"})
            return;
        }
        const writeUserInfo =await token.decodeToken(accessToken);
        req.writeUser = writeUserInfo;
        next();
    }catch(err){
        console.log(err)
    }
}
module.exports={
    validateToken,
}