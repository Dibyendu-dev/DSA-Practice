// functions parameter are names listed in the function defination.
// function arguments are the real values passed to the function.

function sum (...arg){
     let sum =0;
     for( let i of arg) sum+= i;
     return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

function myFunction() {
    return this;
  }
  let y = myFunction(); 
  console.log(y);

  