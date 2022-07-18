const user = require('./user');
const board = require('./board');

const modelList = [
    'user','board'
]

module.exports = {
    modelDefines : {
        user, board
    },
    modelList
}