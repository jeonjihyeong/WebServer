const express = require('express')
const middleware = require('../lib/common/middleware')
const basicRouter= express.Router();
const anonymousRouter = require(('./anonymous'));
const boardRouter = require(('./board'));


basicRouter.use('/',anonymousRouter)
basicRouter.use('/board',boardRouter)



module.exports ={
    basicRouter
}