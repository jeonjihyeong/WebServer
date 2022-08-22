const {commentService} = require('../../service');
const jwt = require('jsonwebtoken');

const write = async(req,res)=>{
    console.log("컨트롤러 동작");
    const dataValue = req.body;
    try{
        console.log(req.writeUser.userIdx)
        try{
            await commentService.writeComment(req.writeUser.userIdx,dataValue.comment,dataValue.boardIdx)
            res.send({data:'success'})
        }catch(err){
            res.send({data: 'failed'})
            console.log(err)
        }
    }catch(err){
        console.err()
    }
}

const get = async(req, res)=>{
    console.log("controller working")
    let result;
    try{
        result = await boardService.getBoard(1);
        console.log(result);
        res.send({data:result});
    }catch(err){
        console.log(err)
    }
}

module.exports={
    write, get
}