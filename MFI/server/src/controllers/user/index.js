const {decodeToken} = require('../../lib/common/token');
const {userService} = require('../../service')

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

const withDrawUser = async(req,res)=>{
    const user = req.writeUser
    try{
        result = await userService.deleteUser(user.userIdx);
        res.send({data: "SUCCESS"})
    }catch(err){
        console.log(err);
        res.send({message: "ERROR_DELETE"})
    }
}

module.exports = {
    info,withDrawUser
}