// find the minimum number in the array

let arr = [];
arr.push(2, 3, 9, 7, 6, 9, 5);
console.log(arr);

let min = arr[0];
for (i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(`the minimum num is ${min}`);
