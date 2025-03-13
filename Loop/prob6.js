// reverse of a digit

let num = Number(prompt("enter the number"));

if (isNaN(num)) {
  console.log("sorry! pls enter a valid number");
} else if (num <= 0) {
  console.log("sorry! pls enter a positive number");
} else {
  //
  let orignalcopy = num;
  let rev = 0;
  while (num > 0) {
    let reminder = num % 10;
    rev = rev * 10 + reminder;
    num = Math.floor(num / 10);
  }
  console.log(`reverse of the ${orignalcopy} is ${rev}`);
}
