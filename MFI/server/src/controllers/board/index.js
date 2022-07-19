const service = require('../../service');
const jwt = require('jsonwebtoken')

const write = async(req,res)=>{
    console.log(req)
    res.send ({data: 'idFailed'})
}

module.exports={
    write,
}