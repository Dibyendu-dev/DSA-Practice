let member1 ={
    firstName: "dibyendu",
    lastName: "das",
}
let member2 = {
    firstName: "sewli",
    lastName: "das",
}


 function greet(greet1,greet2){
    console.log(greet1 + ' ' +this.firstName + ' '+ this.lastName+ ' '+ greet2)
}

// let greeting = {
//     greet:  function (greet1,greet2){
//         console.log(greet1 + ' ' +this.firstName + ' '+ this.lastName+ ' '+ greet2)
//     }
// }

greet.call(member1, "hello","how are you")
greet.call(member2, "hello","how are you")

// greet("hello","how are you");
