const {models, Op}= require('../../lib/db')

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
            where:{
                userIdx: n
            },raw:true
        })
        // res.data=result;s
        
    }catch(err){
        console.log(err);
    }
    return result;
}



module.exports = {
    writeBoard, getBoard
}