const {models, Op}= require('../../lib/db')

const writeComment=async(userIdx,comment, boardIdx)=>{
    let timestamp = new Date().getTime();
    try{
        await models['comment'].create({
            userIdx,
            boardIdx,
            comment,
            created: timestamp
        })
    }catch(err){
        console.log(err);
    }
    return
}

const getComment= async(boardIdx)=>{ 
    let result;
    try{
        result = await models['comment'].findAll({
            include:models['user'],
            where:{
                boardIdx:boardIdx
            }
        })
    }catch(err){
        console.log(err);
    }
    return result;
}




module.exports = {
    writeComment, getComment
}