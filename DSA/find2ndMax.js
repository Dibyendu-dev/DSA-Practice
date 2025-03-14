// find 2nd max



let arr = [];
arr.push(2, 3, 9, 7, 6, 9, 5);
console.log(arr);

let max = arr[0];
let smax = arr[1];
for (i = 2; i < arr.length; i++) {
  if ( arr[i] > max) {
    smax = max;
    max=arr[i];
  }
  else if(arr[i] > smax || arr[i]!= max){
    smax=arr[i]
  }
}
console.log(`the  second maximum num is ${smax}`);
