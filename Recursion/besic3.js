let arr = [1, 3, 5, 7, 8, 9, 12];
let start = 0;
let end = arr.length - 1;

function revArray(arr, start, end) {
  if (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    revArray(arr, start + 1, end - 1);
  }
  return arr;
}

console.log(revArray(arr, start, end));

let str = "madam";
let arr2 = str.split("");
let s = 0;
let e = arr2.length - 1;

function palindome(arr2, s, e) {
  while (s < e) {
    if (arr2[s] !== arr2[e]) {
        console.log("Mismatch found!");
      return false;
    }

    s++;
    e--;
  }
  return true;
}

console.log(palindome(arr2, s, e));
