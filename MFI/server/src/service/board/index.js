const {models, Op}= require('../../lib/db')

const writeBoard=async(userIdx,title, content)=>{
    let result;
    try{
        result = await models['board'].create({
            userIdx: userIdx,
            title: title,
            content: content,
        })
    }catch(err){
        console.log(err);
    }
}



module.exports = {
    writeBoard, 
}