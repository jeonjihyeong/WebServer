const {models, Op}= require('../../lib/db')
// const db=require('../lib')
// const models=db.models
// const Op=db.Op

const saveUser=async(id, pw,age,email,name,nickname,salt)=>{
    try{
        await models['user'].create({
            id: id,
            pw: pw,
            age: age,
            email: email,
            name: name,
            nickname: nickname,
            salt: salt,
        })
    }catch(err){
        console.log(err);
    }

}

const getUserId=async(id)=>{
    let results;
    try{
        results = await models['user'].findOne({
            where:{
                id : id
            }
        })
    }catch(err){
        console.log(err)
    }
    return results;
}

const getUserEmail=async(email,name)=>{
    let results;
    try{
        results = await models['user'].findOne({
            where:{
                email : email,
                name:name,
            }
        })
    }catch(err){
        console.log(err)
    }
    return results;
}

const changePw = async(newPw,id,salt)=>{
    try{
        results = await models['user'].update({
            pw:newPw,
            salt:salt
        },{
            where:{id:id}
        })
    }catch(err){
        console.log(err);
    }
}
module.exports={
    getUserId,
    saveUser,
    getUserEmail,
    changePw
}


