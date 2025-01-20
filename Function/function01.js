/* function declairation 
 function functionName(parameter)
    { 
        }
 Declared functions are not executed immediately, 
     They are "saved for later use",
      and will be executed later, when they are called

*/

function multiply (a,b){
    return a*b
}

const mul =multiply(7,8) //call the multiply function
console.log(mul);

// anonymous function expression
const x = function (c,d) { return c* d}
console.log(x(5,6))

// function hoisting

console.log(myFunction(5));

function myFunction(y) {
  return y * y;
}

// iife 
(function  (x,y){
    let z= x*y
    console.log(z)
})(10,12)

//functions are objects in js
console.log(myFunction.length);
let text = multiply.toString();
console.log(text)

// arrow function
 const d =(j,k)=>{
    return j*k;
 }
 console.log(d(13,13));
