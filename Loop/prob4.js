// prime number
let num = Number(prompt("enter the number"));

if (isNaN(num)) {
  console.log("sorry! pls enter a valid number");
} else if (num <= 0) {
  console.log("sorry! pls enter a positive number");
} else {
  let prime = true;
  for (i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is a not prime number`);
  }
}
