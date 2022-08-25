const {anonymousService} =require('../../service')
const jwt = require('jsonwebtoken')
const signToken=require('../../lib/common/token')

const login = async(req, res) => {
    const data=req.body;
    const idData=await anonymousService.getUserId(data.id);
    if (idData===null){
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
          const token = signToken(payload);
          console.log(token);
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
      }
    }
  }


module.exports={
    login, signup
}