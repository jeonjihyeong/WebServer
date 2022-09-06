function saynode(){
    console.log("node")
}

var es = 'ES'
var oldObject = {
    sayJs: function(){
        console.log("js");
    },
    saynode
};

oldObject[es+6] = 'Fantastic'
oldObject.sayJs()
oldObject.saynode()


const newObject={
}
console.log(oldObject.ES6)