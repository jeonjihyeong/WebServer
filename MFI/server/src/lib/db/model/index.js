const user = require('./user');
const test = require('./board');

const modelList = [
    'user','test'
]

module.exports = {
    modelDefines : {
        user,test
    },
    modelList
}