function hello_world_function(){
    // var keyword is a fnction scope cannot be accessed outside this function
    var hello_world = "Hello_World"
    console.log(hello_world,"hello world inside")
}

hello_world_function()

var hello_World="Hello World"
console.log("Hello World");

let hello_World="Hello World 2"
console.log("Hello World2");

const hello_World="Hello World 3"
console.log("Hello World3");


// redeclaration and reassignment

var a = 10;
var a = 20;
a = 50;
console.log(a,"aaaa");

// let reassignment and cannot redeclare
let b = 30;
b = 70;
//let b = 80;
console.log(b,"bbbb");


//const cannot reassign and redeclare
const pi = 3.14;
//pi = 3.15;
// const pi = 3.27

console.log(pi,"tetse");
//block scope
// {
// }

if(true){
    var c = 10;
    //let and comst are block scope 
    let d = 20;
    const e = 30;
    console.log(c,d,e);
}
console.log(c,"test c outside");
// console.log(d,e,"test d and e outside");


let test = null;
console.log(test,"test undefinde")


// Array (apple, banana, cherry)
// 0  1  2
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Objects
let person = {
    // key: value
    name: "Rakesh",
    age: 22,
    city: "Kathmandu"
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);