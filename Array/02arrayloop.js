//  for (in) loop

let arr = ["all", "mens", "are", "handsome"];

for (let i in arr){
    console.log(i);
}

for (let i in arr){
    console.log(arr[i]);
}

// for of loop
for (let i of arr){
    console.log(i); // it prints the value of an array
}

for (let i of arr){
    console.log(arr[i]); // it prints undefined
}

// for each loop

arr.forEach((val,i)=>{
    console.log(val);
})

arr.forEach((val,i)=>{
    console.log(arr[i]);
})