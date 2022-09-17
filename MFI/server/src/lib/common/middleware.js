const jwt = require("jsonwebtoken");
const token = require("./token");
const {anonymousService} =require('../../service');

// 토큰확인
const validateToken = async(req,res,next)=>{
    let accessToken = req.headers.authorization;
    console.log("MIDDLE_WARE: WORKING")
    try{
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

// 회원가입시 중복되는 메일 있는지 확인
const checkDuplicateMail = async(req,res,next)=>{
    let inputEmail = req.body.email;
    console.log(inputEmail)
    console.log("MIDDLE_WARE: CHECK_EMAIL");
    try{
        console.log(await anonymousService.getUserEmail(inputEmail));
        if (await anonymousService.getUserEmail(inputEmail)!==null){
            console.log("Already Existence");
            res.send({message:"Already Existence"})
            return ;
        }
        console.log("no mail");
        next();
    }catch(err){
        console.log(err);
    }
}

// 아이디 찾기 할때 존재하는 회원인지 확인
const checkExistenceUser=async(req,res,next)=>{
    let inputUser = req.body;
    try{
        const getUserEmailResult = await anonymousService.getUserEmail(inputUser.email,inputUser.name)
        if(getUserEmailResult===null){
            console.log("Not Existence Email");
            res.send({message:"Not Existence Email"});
            return;
        }
        if(getUserEmailResult.name!==inputUser.name){
            console.log("Not Correct Name");
            res.send({message:"Not Correct Name"})
            return;
        }
        if('id' in inputUser){
            if(getUserEmailResult.id!==inputUser.id){
                console.log("Not Correct Id");
                res.send({message:"Not Correct Id"})
                return;
            }
        }
        req.user=getUserEmailResult.id;
        next();
    }catch(err){
        console.log(err)
    }

}

module.exports={
    validateToken,
    checkDuplicateMail,
    checkExistenceUser
}