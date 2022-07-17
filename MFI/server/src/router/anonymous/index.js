const express = require('express')
const anonymousRouter= express.Router();
const {anonymous} =require('../../controllers')

anonymousRouter.post('/login', anonymous.login);
anonymousRouter.post('/signup', anonymous.signup);

module.exports=anonymousRouter;