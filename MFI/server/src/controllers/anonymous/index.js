const {anonymousService} =require('../../service')
const jwt = require('jsonwebtoken')
const {signToken}=require('../../lib/common/token')
const mailSender = require('../../lib/common/mailer')
const {signUpMail,auth_key, findIdMail} =require('../../config/setMail')
require('dotenv').config();

const login = async(req, res) => {
    const data=req.body;
    const idData=await anonymousService.getUserId(data.id);
    if (idData===null){
      console.log('hi')
      res.send ({data: 'idFailed'})
    }else {
        const pwData=idData.dataValues.pw
        if(data.pw!==pwData){
            res.send({data: 'pwFailed'})
        }else {
          delete idData.dataValues.pw;
          const payload = {
            ...idData.dataValues
          }
          const token = await signToken(payload);
            res.send({data: token});
        }
    }
  }

const signup = async(req,res)=>{
    const data= req.body;
    const duplicateCheck= await anonymousService.getUserId(data.id);
    if (duplicateCheck!==null){
    console.log('id가 이미 존재합니다.');
    res.send({data: 0})
    }else{
      try{
        await anonymousService.saveUser(data.id,data.pw,data.age,data.email,data.name,data.nickname);
        res.send({data: 1})
      }catch(err){
        console.log(err);
        res.send({message:`ERROR: ${err}`});
      }
    }
  }

const signUp_mail = async(req,res)=>{
  const mail_data = req.body.email;
  console.log(auth_key)
  try{
    mailSender.sendGmail(signUpMail, mail_data)
    res.send({data:auth_key})
  }catch(err){
    console.log(err);
    res.send({message:"FAIL_SEND_EMAIL"})
  }
}

const findId_mail = async(req,res)=>{
  const mail_data = req.body.email;
  const setFIndIdMail = findIdMail(req.body.name,req.user)
  try{
    mailSender.sendGmail(setFIndIdMail, mail_data)
    res.send({data:'success'})
  }catch(err){
    console.log(err);
    res.send({message:"FAIL_SEND_EMAIL"})
  }
}

const findPw_mail = async(req,res)=>{
  const mail_data = req.body.email;
  console.log(auth_key)
  try{
    mailSender.sendGmail(signUpMail, mail_data)
    res.send({data:auth_key})
  }catch(err){
    console.log(err);
    res.send({message:"FAIL_SEND_EMAIL"})
  }
}

const changePw = async(req,res)=>{
  const mail_data = req.body.email;
  console.log(auth_key)
  try{
    mailSender.sendGmail(signUpMail, mail_data)
    res.send({data:auth_key})
  }catch(err){
    console.log(err);
    res.send({message:"FAIL_SEND_EMAIL"})
  }
}

module.exports={
    login,
    signup, 
    signUp_mail,
    findId_mail,
    findPw_mail,
    changePw
}