const express = require('express')
const middleware = require('../lib/common/middleware')

const basicRouter= express.Router();
const annoymouseRouter = require(('./anonymous'));
const boardRouter = require(('./board'));


basicRouter.use('/',annoymouseRouter)
boardRouter.use('/board',middleware.validateToken,boardRouter)



module.exports ={
    basicRouter
}