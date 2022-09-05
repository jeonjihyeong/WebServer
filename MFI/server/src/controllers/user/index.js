const {decodeToken} = require('../../lib/common/token');


const info = async(req,res) =>{
    const userToken = req.headers.authorization;
    try{
        const userinfo = await decodeToken(userToken);
        console.log(userinfo);
        res.send({data : userinfo});
    }catch(err){
        console.log(err)
        res.send({message: err})
    }
}

module.exports = {
    info,
}