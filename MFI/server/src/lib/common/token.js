const jwt = require("jsonwebtoken")

const decodeToken =async(anyToken)=>{
    const decodedToken = jwt.decode(anyToken, 'aaa',{
        algorithm: 'HS256',
        expiresIn: '2h',
      })
    return decodedToken;
}

const verifyToken = async(anyToken)=>{
    // const teno = jwt.verify(anyToken, 'aaa',{
    // });


    try {
        jwt.verify(anyToken, 'aaa',{
        })
        return true;
    }catch(err){
        console.log(err)
    }
    // if(verifiedToken === 'jwt expired'){
    //     return false;
    // }else return true;
}


module.exports={
    decodeToken, verifyToken,
}