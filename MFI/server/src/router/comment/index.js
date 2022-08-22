const express = require('express')
const commentRouter  = express.Router();
const {comment}= require('../../controllers')

commentRouter.post('/write', comment.write);
commentRouter.get('/get', comment.get);

module.exports = commentRouter;