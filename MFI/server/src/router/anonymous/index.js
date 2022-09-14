const express = require('express')
const anonymousRouter= express.Router();
const {anonymous} =require('../../controllers')
const {checkExistenceUser,checkDuplicateMail} = require('../../lib/common/middleware')

// 로그인
anonymousRouter.post('/login', anonymous.login);

//회원가입 
anonymousRouter.post('/signup', anonymous.signup);
anonymousRouter.post('/signuUpMail',checkDuplicateMail, anonymous.signUp_mail);

// 아이디 찾기
anonymousRouter.post('/findId',checkExistenceUser, anonymous.findId_mail);

// 비밀번호 찾기
anonymousRouter.put('/changePw', anonymous.changePw); //비밀번호 수정
anonymousRouter.post('/findPw',checkExistenceUser, anonymous.findPw_mail);



module.exports=anonymousRouter;