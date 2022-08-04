const {boardService} = require('../../service');
const jwt = require('jsonwebtoken')



const write = async(req,res)=>{
    console.log("컨트롤러 동작");
    const dataValue = req.body;
    try{
        console.log(req.writeUser.userIdx)
        const result = await boardService.writeBoard(req.writeUser.userIdx,dataValue.title,dataValue.content)
        console.log(result)
        console.log(req)
        res.send({data: 'success'})
    }catch(err){
        console.err()
    }
}

const postingBoard = async(req,res)=>{
    console.log("controller working")
}

module.exports={
    write, postingBoard
}