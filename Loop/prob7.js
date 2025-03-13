// strong number

let num = Number(prompt("enter the number"));

if (isNaN(num)) {
  console.log("sorry! pls enter a valid number");
} else if (num <= 0) {
  console.log("sorry! pls enter a positive number");
} else {
  //
  let sum = 0;
  let copyNum = num;
  while (num > 0) {
    let reminder = num % 10;
    let fact = 1;
    for (let i = 1; i <= reminder; i++) {
      fact = fact * i;
    }
    sum = sum + fact;
    num = Math.floor(num / 10);
  }
  if (copyNum === sum) {
    console.log(`${copyNum} is a strong number`);
  } else {
    console.log(`${copyNum} is a not a strong number`);
  }
}
