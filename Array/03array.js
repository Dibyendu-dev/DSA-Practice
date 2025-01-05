// concat method

let array1 =[1,2,3,4]
array1.concat([5,6,7])
let newArray = array1.concat([5, 6, 7]); // it creates new array
// console.log(array1);
// console.log(newArray);


// console.log(newArray.length); // .length is not a function


// spread operator
 function addFourNumbers (a,b,c,d ){
   let sum = a+b+c+d ;
   return sum;
 }

 let numarr = [1,3,5,7];
 let addnum = addFourNumbers(...numarr)
//  console.log(addnum);

 // min and max in an array

 let max =Math.max(...numarr);  // functions expect individual numbers as arguments, not an array
 let min = Math.min(...numarr);

 console.log(max, min);
