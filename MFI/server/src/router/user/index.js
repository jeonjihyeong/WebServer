const express = require('express')
const userRouter  = express.Router();
const {user}= require('../../controllers')

userRouter.get('/info', user.info);

module.exports = userRouter;