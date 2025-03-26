// factor of a  number
let num = Number(prompt("enter the number"));

if (isNaN(num)) {
  console.log("sorry! pls enter a valid number");
} else if (num <= 0) {
  console.log("sorry! pls enter a positive number");
} else {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log("factor of " + num + " is " + i);
    }
  }
}
