const string = 'abc';
const number= 1;
const boolean = true;
const obj = {
    outside:{
        inside:{
            key:'value'
        },
    },
};

console.time('전체 시간');
console.log("평범한 로그")
console.log(string, number, boolean);
console.error ('에러메세지');

console.table([{name:'제로', birth:1994}, {name: 'hero', birth:1988}]);

console.dir(obj, {colors:false, depth: 2});
console.dir(obj, {colors:true, depth: 1});


console.time('시간측정');