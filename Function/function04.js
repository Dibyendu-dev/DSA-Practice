// The primary purpose of new is to create a new object
//  and set its prototype to the constructor's prototype. Without new, no object is created.

function person (name){
    this.name = name;
}

const biki = new person ("biki");
console.log(biki.name);

const sewli = person ("sewli");
console.log(sewli)

