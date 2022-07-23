const jwt = require("jsonwebtoken");
const token = require("./token")

const validateToken = async(req,res,next)=>{
    let accessToken = req.headers.authorization;
    console.log(accessToken)
    console.log("미들웨어 동작")
    try{
        if(token.verifyToken(accessToken)===null){
            res.send({data : "need Token"})
            return;
        }
        else{
            const writeUserInfo =token.decodeToken(accessToken);
            req.writeUser = writeUserInfo;
            console.log(req.writeUser)
            return next();
        }
    }catch(err){
        console.log(err)
    }
}
module.exports={
    validateToken,
}