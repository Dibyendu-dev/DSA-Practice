// possible way to create object

//object constructor
let object1 = new Object();

//objects create method
let object2 = Object.create(null);

//object literal
let object3 = {
    name:"Dibyendu",
    age:28

}

//function constructor
function person (name){
    this.name=name;
    this.age=28;
}
let object4= new person("ddas")

//function constructor with prototype
function man(){}
man.prototype.name="dibyendu";
let object5= new man();

//ES6 class 
class car{
    constructor(name){
        this.name=name;
    }
}
let object6= new car("lamborgini")

//singleton pattern
let object7= new (function (){
    this.name="biki"
})()


// prototype chaining

/*
prototype chaining is used to build new type of objects based one existing ones,
similar to inheritence in a class based language 


*/