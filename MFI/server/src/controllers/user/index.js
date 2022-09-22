const {decodeToken} = require('../../lib/common/token');
const {decryptionPassWord} = require('../../lib/common/hashing')
const {userService, anonymousService} = require('../../service')
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
    if(await checkPw(req,user)===1){
        console.log("--------------UserPw--------------")
        try{
            result = await userService.deleteUser(user.userIdx);
            res.send({data: "SUCCESS"})
        }catch(err){
            console.log(err);
            res.send({message: "ERROR_DELETE"})
        }
    }else{
        res.send({message: "NOT_CORRECT_PW"})
    }
}

const checkPw = async(req,user)=>{
    const DB_User= await anonymousService.getUserId(user.id)
    let inputHashPw=decryptionPassWord(req.body.pw,DB_User.salt)
    if (inputHashPw===DB_User.pw){
        return 1
    }return 0
}

module.exports = {
    info,withDrawUser,checkPw
}