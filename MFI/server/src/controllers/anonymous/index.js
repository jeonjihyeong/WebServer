const jwt = require('jsonwebtoken')
const {anonymousService} =require('../../service')
const {signToken}=require('../../lib/common/token')
const mailSender = require('../../lib/common/mailer')
const {salt,encryptionPassWord,decryptionPassWord} =require('../../lib/common/hashing')
const {signUpMail,auth_key, findIdMail,findPwMail} =require('../../config/setMail')
require('dotenv').config();

// 로그인
const login = async(req, res) => {
    const data=req.body;
    const idData=await anonymousService.getUserId(data.id);
    try{
      const decodePW = decryptionPassWord(data.pw,idData.salt);
      if (idData===null){
        res.send ({data: 'idFailed'})
      }else {
          const pwData=idData.dataValues.pw
          if(decodePW!==pwData){
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
    }catch(err){
      console.err(err);
      res.send({message: 'idFailed'})
    }
  }
// 회원가입
const signup = async(req,res)=>{
    const data= req.body;
    const hashPw = encryptionPassWord(data.pw);
    console.log(hashPw)
    const duplicateCheck= await anonymousService.getUserId(data.id);
    if (duplicateCheck!==null){
    console.log('id가 이미 존재합니다.');
    res.send({data: 0})
    }else{
      try{
        await anonymousService.saveUser(data.id,hashPw,data.age,data.email,data.name,data.nickname,salt);
        res.send({data: 1})
      }catch(err){
        console.log(err);
        res.send({message:`ERROR: ${err}`});
      }
    }
  }
// 회원가입 인증 메일
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

// 아이디 찾기 메일
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

// 비밀번호 찾기 메일
const findPw_mail = async(req,res)=>{
  const mail_data = req.body.email;
  const setFIndPwMail = findPwMail(req.body.name)
  console.log(auth_key)
  try{
    mailSender.sendGmail(setFIndPwMail, mail_data)
    res.send({data:auth_key})
  }catch(err){
    console.log(err);
    res.send({message:"FAIL_SEND_EMAIL"})
  }
}

// 비밀번호 변경
const changePw = async(req,res)=>{
  const incodingPw = encryptionPassWord(req.new_pw);
  try{
    anonymousService.changePw(incodingPw,req.body.id,salt);
    res.send({data:"SUCCESS"})
  }catch(err){
    console.log(err);
    res.send({message:"FAIL_CHANGE_PASSWORD"})
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