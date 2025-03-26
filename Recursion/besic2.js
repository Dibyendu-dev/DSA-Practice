function sumOfN(i, sum) {
  if (i < 1) {
    return sum;
  }

 return sumOfN(i - 1, sum + i);
  
}

function factofn(i,fact){
if(i<1) return fact;
return factofn(i-1,fact*i)
}

let n = 5;

console.log(sumOfN(n, 0));
console.log(factofn(n,1))

const arr=[1,3,5,7,9]
console.log(arr.reverse())
