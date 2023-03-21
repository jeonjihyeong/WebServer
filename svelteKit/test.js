var foo2; // [Hoisting] 함수표현식의 변수값 "선언"

function foo() { // [Hoisting] 함수선언문
    console.log("hello");
}

foo();
console.log(foo2)
//   foo2(); // ERROR!! 

  foo2 = function() { 
    console.log("hello2");
  }