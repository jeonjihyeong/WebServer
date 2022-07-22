const {models, Op}= require('../../lib/db')

const writeBoard=async(title, content)=>{
    let result;
    try{
        result = await models['board'].create({
            userIdx: 1,
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