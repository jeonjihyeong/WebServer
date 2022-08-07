const {boardService} = require('../../service');
const jwt = require('jsonwebtoken')

const write = async(req,res)=>{
    console.log("컨트롤러 동작");
    const dataValue = req.body;
    try{
        console.log(req.writeUser.userIdx)
        await boardService.writeBoard(req.writeUser.userIdx,dataValue.title,dataValue.content)
        res.send({data: 'success'})
    }catch(err){
        console.err()
    }
}

const get = async(req, res)=>{
    console.log("controller working")
    let result;
    try{
        result = await boardService.getBoard("뭐");
        console.log(result.title);
        res.send({result})
    }catch(err){
        console.log(err)
    }
}

module.exports={
    write, get
}