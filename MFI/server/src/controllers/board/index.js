const {boardService,commentService} = require('../../service');
const jwt = require('jsonwebtoken');

const write = async(req,res)=>{
    console.log("컨트롤러 동작");
    const dataValue = req.body;
    try{
        console.log(req.writeUser.userIdx)
        await boardService.writeBoard(req.writeUser.userIdx,dataValue.title,dataValue.content)
        res.send({data: 'Success'})
    }catch(err){
        console.err()
        res.send({message:"Failed"})
    }
}

const get = async(req, res)=>{
    console.log("controller: working")
    let result;
    try{
        result = await boardService.getBoard(1);
        res.send({data:result});
    }catch(err){
        console.log(err)
        res.send({message:"Failed"})
    }
}

const getContent = async(req, res)=>{
    console.log("CONTROLLER: WORKING");
    const textId = req.params.boardIdx;
    console.log("파라미터 전달 확인"+textId)
    try{
        const result = await boardService.getText(textId);
        const comment= await commentService.getComment(textId);
        const userInfo = req.writeUser
        res.send({data:result, comment:comment,accessUser:userInfo});
    }catch(err){
        console.log(err)
        res.send({message:"Failed"})
    }
}


const deleteContent = async(req,res)=>{
    console.log("CONTROLLER: WORKING");
    const textId = req.params.boardIdx;
    try{
        await boardService.deleteBoard(textId);
        res.send({message:"Success"})
    }catch(err){
        res.send({message:"Failed"})
    }    
}

const updateContent = async(req,res)=>{
    console.log("CONTROLLER: WORKING");
    const boardIdx= req.params.boardIdx;
    try{
        await boardService.updateBoard(boardIdx,req.body.title,req.body.content);
        res.send({message:"Success"})
    }catch(err){
        res.send({message:"Failed"})
    }
    
}

module.exports={
    write, get, getContent, deleteContent, updateContent
}