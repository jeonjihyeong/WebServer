const {models, Op}= require('../../lib/db')
const user =require('../../lib/db/model/user')

const writeBoard=async(userIdx,title, content)=>{
    let result;
    let timestamp = new Date().getTime();
    try{
        result = await models['board'].create({
            userIdx: userIdx,
            title: title,
            content: content,
            created: timestamp
        })
    }catch(err){
        console.log(err);
    }
}

const getBoard= async(n)=>{ 
    let result;
    try{
        result = await models['board'].findAll({
            include:models['user'],raw:true,
            where:{
                userIdx: n
            },raw:true
        })
        // res.data=result;
        
    }catch(err){
        console.log(err);
    }
    return result;
}

const getText = async(boardIdx)=>{
    let result;
    try{
        result = await models['board'].findOne({
            include:models['user'],
            where:{
                boardIdx: boardIdx
            }
    })
    }catch(err){
        console.log(err);
    }
    return result;
}



module.exports = {
    writeBoard, getBoard, getText
}