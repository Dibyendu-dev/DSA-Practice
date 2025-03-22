// find the maximum number in the array

let arr = [];
arr.push(2, 3, 9, 7, 6, 9, 5);
console.log(arr);

let max = arr[0];
for (i = 1; i < arr.length; i++) {
  if ( arr[i] > max) {
    max = arr[i];
  }
}
console.log(`the maximum num is ${max}`);
