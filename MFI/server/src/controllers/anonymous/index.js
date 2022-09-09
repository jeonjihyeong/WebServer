const {anonymousService} =require('../../service')
const jwt = require('jsonwebtoken')
const {signToken}=require('../../lib/common/token')
const mailSender = require('../../lib/common/mailer')
const { randomString } = require('../../lib/common/numberGenerator')

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

const mail = async(req,res)=>{
  const mail_data = req.body;
  const ran_num = randomString();
  console.log(ran_num)
  await mailSender.sendGmail(mail_data, ran_num);
}
module.exports={
    login, signup, mail
}