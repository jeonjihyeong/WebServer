const express = require('express')
const boardRouter  = express.Router();
const {board}= require('../../controllers')

boardRouter.post('/', board.write);
boardRouter.get('/', board.get);
boardRouter.get('/:boardIdx', board.getContent);
boardRouter.delete('/:boardIdx', board.deleteContent);
boardRouter.put('/:boardIdx', board.updateContent);

module.exports = boardRouter;