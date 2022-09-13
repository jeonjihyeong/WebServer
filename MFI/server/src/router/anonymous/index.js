const express = require('express')
const anonymousRouter= express.Router();
const {anonymous} =require('../../controllers')
const {checkExistenceUser,checkDuplicateMail} = require('../../lib/common/middleware')

anonymousRouter.post('/login', anonymous.login);
anonymousRouter.post('/signup', anonymous.signup);
anonymousRouter.put('/findPw', anonymous.changePw);
anonymousRouter.post('/signup/mail',checkDuplicateMail, anonymous.signUp_mail);
anonymousRouter.post('/findId/mail',checkExistenceUser, anonymous.findId_mail);
anonymousRouter.post('/findPw/mail',checkExistenceUser, anonymous.findPw_mail);



module.exports=anonymousRouter;