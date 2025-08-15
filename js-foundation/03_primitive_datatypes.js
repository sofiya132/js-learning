//Primitive datatypes

//Number
let balance = 120;
console.log(typeof(balance));
console.log(balance);

//converting into complex datatypes

let anotherbalance = new Number(120);
console.log( typeof anotherbalance);
console.log(anotherbalance .valueOf());

//Boolean
let isactive = true;
let isreallyactive = new Boolean(true);// complex one not recommended
console.log(isactive);
console.log(typeof isactive);

// Null and undefined

let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

//String

let mystring = "hello";
let myStringone = 'hi';
let userName = 'aman';

let oldGreet = mystring + " " + "aman" ; // old method
console.log(oldGreet);

let greetMessage = `Hello ${userName} !`;//new method also known as string interpolation
console.log(greetMessage);

let demoOne = `value is ${2*2}`;
console.log(demoOne);

//Symbol
let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1);
console.log(sm1 == sm2);
