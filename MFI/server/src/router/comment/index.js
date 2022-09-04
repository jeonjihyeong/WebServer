const express = require('express')
const commentRouter  = express.Router();
const {comment}= require('../../controllers')

commentRouter.post('/', comment.write);
commentRouter.get('/', comment.get);

module.exports = commentRouter;