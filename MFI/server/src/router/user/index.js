const express = require('express')
const userRouter  = express.Router();
const {user}= require('../../controllers')

userRouter.get('/', user.info);

module.exports = userRouter;