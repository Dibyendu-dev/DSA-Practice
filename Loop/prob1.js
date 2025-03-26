// sum of n natural number
let num = Number(prompt("enter the natural number"));

if (isNaN(num)) {
  console.log("sorry! pls enter a valid number");
} else if (num <= 0) {
  console.log("sorry! pls enter a positive number");
} else {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
