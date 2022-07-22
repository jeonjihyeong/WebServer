const jwt = require("jsonwebtoken")

const decodeToken =async(anyToken)=>{
    const decodedToken = jwt.decode(anyToken, 'aaa',{
        algorithm: 'HS256',
        expiresIn: '2h',
      })
    return decodedToken;
}

const verifyToken = async(anyToken)=>{
    const verifiedToken = jwt.verify(anyToken, 'aaa',{
        algorithm: 'HS256',
        expiresIn: '2h',
    })
    return verifiedToken;
}


module.exports={
    decodeToken, verifyToken,
}