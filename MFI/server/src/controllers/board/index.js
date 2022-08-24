const {boardService,commentService} = require('../../service');
const jwt = require('jsonwebtoken');

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
        result = await boardService.getBoard(1);
        res.send({data:result});
    }catch(err){
        console.log(err)
    }
}

const getContent = async(req, res)=>{
    console.log("controller working");
    const textId = req.params.boardIdx;
    console.log(textId)
    let result;
    try{
        result = await boardService.getText(textId);
        comment= await commentService.getComment(textId);
        console.log(result);
        res.send({data:result, comment:comment});
    }catch(err){
        console.log(err)
    }
}

module.exports={
    write, get,getContent
}