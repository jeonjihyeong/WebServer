const {models, Op}= require('../../lib/db')

const deleteUser =async(userIdx)=>{
    try{
        await models['user'].destroy({
            where:{
                userIdx: userIdx
            }
        })
    }catch(err){
        console.log(err);
        res.send({messsage:"ERROR_DELETE"})
    }
    return
}

module.exports={
    deleteUser,
}