const {boardService} = require('../../service');
const jwt = require('jsonwebtoken')

const write = async(req,res)=>{
    // console.log(req.body.title,req.body.content)
    const token = jwt.decode(req.body.token,{
        algorithm: 'HS256',
        expiresIn: '2h',
      })
    console.log(token)
    // const userData = boardService.writeUser(id) 
    boardService.writeBoard(token.userIdx,req.body.title,req.body.content)
    res.send ({data: 'idFailed'})
}

module.exports={
    write,
}