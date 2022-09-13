const jwt = require("jsonwebtoken");
const token = require("./token");
const {anonymousService} =require('../../service');
const { getUserEmail } = require("../../service/anonymous");

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

const checkExistenceUser=async(req,res,next)=>{
    let inputUser = req.body;
    try{
        const getUserEmailResult = await anonymousService.getUserEmail(inputUser.email)
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