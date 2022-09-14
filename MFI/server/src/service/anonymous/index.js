const {models, Op}= require('../../lib/db')
// const db=require('../lib')
// const models=db.models
// const Op=db.Op

const saveUser=async(id, pw,age,email,name,nickname)=>{
    try{
        await models['user'].create({
            id: id,
            pw: pw,
            age: age,
            email: email,
            name: name,
            nickname: nickname,
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

const getUserEmail=async(email)=>{
    let results;
    try{
        results = await models['user'].findOne({
            where:{
                email : email
            }
        })
    }catch(err){
        console.log(err)
    }
    return results;
}

const changePw = async(newPw,id)=>{
    try{
        results = await models['user'].update({
            pw:newPw,
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


