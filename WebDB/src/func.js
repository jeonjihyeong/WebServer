const {a,b} = require("./var")

function check(i){
    if (i%2){
        console.log(a);
        return;
    }
    console.log(b);
}

module.exports={
    check
}