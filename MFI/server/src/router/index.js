const express = require('express')
const middleware = require('../lib/common/middleware')
const basicRouter= express.Router();
const anonymousRouter = require(('./anonymous'));
const boardRouter = require(('./board'));
const commentRouter = require(('./comment'));
const userRouter = require(('./user'));


basicRouter.use('/',anonymousRouter)
basicRouter.use('/board',middleware.validateToken,boardRouter)
basicRouter.use('/comment',middleware.validateToken,commentRouter)
basicRouter.use('/user',middleware.validateToken,userRouter)



module.exports ={
    basicRouter
}