const express = require('express')
const anonymousRouter= express.Router();

const {annoymouse} =require('../../controllers')

anonymousRouter.post('/login', annoymouse.login);
anonymousRouter.post('/signup', annoymouse.signup);

module.exports=anonymousRouter;