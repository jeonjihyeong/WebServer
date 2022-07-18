const {models, Op}= require('../lib/db')
// const db=require('../lib')
// const models=db.models
// const Op=db.Op

const saveUser=async(id, pw)=>{
    let result;
    try{
        result = await models['user'].create({
            id: id,
            pw: pw,
            email:email,
            name:name,
            nickname:nickname,
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

module.exports={
    getUserId,
    saveUser
}


