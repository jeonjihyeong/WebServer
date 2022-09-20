const fs = require('fs');

console.log('시작')
fs.readFile('./readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
})