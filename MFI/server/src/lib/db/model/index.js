const user = require('./user');
const board = require('./board');
const comment = require('./comment');

const modelList = [
    'user',
    'board','comment'
]

module.exports = {
    modelDefines : {
        user, 
        board, comment
    },
    modelList
}