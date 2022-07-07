const {models, Op}=require('../lib/db')

const saveUser=async(id, pw, age, name)=>{
    let result;
    try{
        result = await models['user'].create({
            id: id,
            pw: pw,
            age: age,
            name: name
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


