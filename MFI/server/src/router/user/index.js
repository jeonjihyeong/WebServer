const express = require('express')
const userRouter  = express.Router();
const {user}= require('../../controllers')

// 회원정보 가져오기
userRouter.get('/', user.info);

// 회원삭제
userRouter.delete('/', user.withDrawUser);
module.exports = userRouter;