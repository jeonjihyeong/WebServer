const {boardService} = require('../../service');
const jwt = require('jsonwebtoken')



const write = async(req,res)=>{
    console.log("컨트롤러 동작");
    const dataValue = req.body;
    try{
        console.log(req.writeUser)
        const result = await boardService.writeBoard(dataValue.title,dataValue.content)
        console.log(result)
        res.send({data: 'success'})
    }catch(err){
        console.err()
    }
}

module.exports={
    write,
}