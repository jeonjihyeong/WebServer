const express = require('express')
const boardRouter  = express.Router();
const {board}= require('../../controllers')

// 게시글 작성
boardRouter.post('/', board.write);

// 게시글 리스트 불러오기
boardRouter.get('/', board.get);

// 특정 게시글 불러오기
boardRouter.get('/:boardIdx', board.getContent);

// 게시글 삭제
boardRouter.delete('/:boardIdx', board.deleteContent);

// 게시글 수정
boardRouter.put('/:boardIdx', board.updateContent);

module.exports = boardRouter;