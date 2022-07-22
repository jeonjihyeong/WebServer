const {boardService} = require('../../service');
const jwt = require('jsonwebtoken')



const write = async(req,res)=>{
    const userIdnumber =req.writeUser


getData()
    console.log("컨트롤러 동작");
    console.log(userIdnumber)
    try{
        boardService.writeBoard(req.body.title,req.body.content)
        res.send({data: 'success'})
    }catch(err){
        console.err()
    }
}

module.exports={
    write,
}