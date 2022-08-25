const express = require('express')
const boardRouter  = express.Router();
const {board}= require('../../controllers')

boardRouter.post('/write', board.write);
boardRouter.get('/get', board.get);
boardRouter.get('/content/:boardIdx', board.getContent);
boardRouter.get('/content/delete/:boardIdx', board.deleteContent);

module.exports = boardRouter;