// factorial of n  number
let num = Number(prompt("enter the number"));

if (isNaN(num)) {
  console.log("sorry! pls enter a valid number");
} else if (num <= 0) {
  console.log("sorry! pls enter a positive number");
} else {
  let fact = 1;
  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
