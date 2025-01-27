let member1 ={
    firstName: "dibyendu",
    lastName: "das",
}
let member2 = {
    firstName: "sewli",
    lastName: "das",
}


 function greet(greet1,greet2){
    // console.log(greet1 + ' ' +this.firstName + ' '+ this.lastName+ ' '+ greet2)
    console.log(`${greet1} ${this.firstName} ${this.lastName} ${greet2}`)
}

// let greeting = {
//     greet:  function (greet1,greet2){
//         console.log(greet1 + ' ' +this.firstName + ' '+ this.lastName+ ' '+ greet2)
//     }
// }

greet.call(member1, "hello","how are you")
greet.call(member2, "hello","how are you")

// greet("hello","how are you");


/*
The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list.
*/

const person1 = {
    firstName: "dibyendu",
    lastName: "das",
    fullname: function (city,country){
        return ( `${this.firstName} ${this.lastName} is located in ${city} ${country}`)
    }
}

let address =person1.fullname.apply(person1,["EB","IN"])
console.log(address)  // Outputs dibyendu das is located in EB IN

// bind() allows you to create a new function with some of its arguments pre-filled.

function multiply(a, b) {
    return a * b;
  }
  
  const double = multiply.bind(null, 2); // Creates a new function where 'a' is always 2
  console.log(double(5)); // Outputs 10