// factor of a  number
let num = Number(prompt("enter the number"));

if (isNaN(num)) {
  console.log("sorry! pls enter a valid number");
} else if (num <= 0) {
  console.log("sorry! pls enter a positive number");
} else {
  for (i = 1; i < Math.floor(num); i++) {
    if (num % i === 0) {
      console.log("factot of " + num + " is " + i);
    }
  }
}
