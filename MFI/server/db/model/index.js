const user = require('./user');
const test = require('./test');

const modelList = [
    'user','test'
]

module.exports = {
    modelDefines : {
        user,test
    },
    modelList
}