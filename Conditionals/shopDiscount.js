let amount =12000;

let amountToPaid;

if(amount<5000){
    amountToPaid= amount;
}else if(amount>5001 && amount<7000){
    amountToPaid =amount - ((amount *5)/100)
}else if(amount>7001 && amount<9000){
    amountToPaid = amount - ((amount *10)/100)
}else if(amount>9001 ){
    amountToPaid = amount - ((amount *20)/100)
}

console.log("you have to pay ₹" + amountToPaid);