const express = require('express')
const boardRouter  = express.Router();
const {board}= require('../../controllers')

boardRouter.post('/write', board.write);
boardRouter.get('/get', board.get);
boardRouter.get('/content/:boardIdx', board.getContent);
boardRouter.delete('/delete/:boardIdx', board.deleteContent);
boardRouter.put('/delete/:boardIdx', board.updateContent);

module.exports = boardRouter;