const express = require('express')
const boardRouter= express.Router();

const {annoymouse} =require('../../controllers')

boardRouter.post('/login', annoymouse.login);

module.exports=boardRouter;