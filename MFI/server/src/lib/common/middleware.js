const jwt = require("jsonwebtoken");
const token = require("./token")

const validateToken = async(req,res,next)=>{
    let accessToken = req.headers.authorization;
    console.log(accessToken)
    console.log("미들웨어 동작")
    if (accessToken==="null"){
        res.send({data:"need token"});
        return;
    }
    else {
        userInfo=token.decodeToken(accessToken)
        req.writeUser = userInfo
        return next()
    }
    
}

module.exports={
    validateToken,
}