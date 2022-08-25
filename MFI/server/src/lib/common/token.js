const jwt = require("jsonwebtoken")

const decodeToken =async(anyToken)=>{
    const decodedToken = jwt.decode(anyToken, 'aaa',{
        algorithm: 'HS256',
        expiresIn: '2h',
      })
    return decodedToken;
}

const signToken = async() => {
    jwt.sign(payload, 'aaa',{
    algorithm: 'HS256',
    expiresIn: '5h',
  })}

const verifyToken = async(anyToken)=>{
    try {
        jwt.verify(anyToken, 'aaa',{
        })
        return true;
    }catch(err){
        console.log(err)
    }
}


module.exports={
    decodeToken, verifyToken,signToken
}