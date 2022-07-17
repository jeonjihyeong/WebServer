const service = require('../../service');
const jwt = require('jsonwebtoken')

const login = async(req, res) => {
    const data=req.body;
    const idData=await service.getUserId(data.id);
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
          const token = jwt.sign(payload, 'aaa',{
            algorithm: 'HS256',
            expiresIn: '2h',
          })
          console.log(token);
            res.send({data: token});
        }
    }
  }

const signup = async(req,res)=>{
    const data= req.body;
    const duplicateCheck= await service.getUserId(data.id);
    const userInfo = duplicateCheck.body
    if (duplicateCheck!==null){
      console.log('id가 이미 존재합니다.');
      res.send({data: 0})
    }else{
      const result = await service.saveUser(data.id,data.pw,data.age,data.name);
      console.log(result);
      res.send({data: 1})
    }
  }


module.exports={
    login, signup
}