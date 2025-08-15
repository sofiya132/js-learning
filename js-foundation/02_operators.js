//operators
let score=102;
let bonus=25;

let totalscore= score + bonus;

//arithematic operators
let addition = 4 + 5;
let subtract = 9 - 3;
let mult = 3 * 5;
let divi = 8 / 2;
let remainder = 9 % 2;
let expo = 2 ** 3;

//increment and decrement operators
let myscore=110;
myscore++;

let credits = 56;
credits--;

//relational operators

let num1 = 3;
let num2 = 3;
let num3 = 6;

console.log(num1 == num2);//true
console.log(num1 != num3);//true
console.log(num1 > num3);//false
console.log(num1 < num3);//true

//Logical operators

// && -> and
// || -> or
// ! -> not

let isloggedin = true;
let ispaid = true;

console.log(isloggedin && ispaid); // true

let isemailuser = true;
let isgoogleuser = false;

console.log(isemailuser || isgoogleuser);//true

//Assignment operators

let no = 10;
// no = no + 5;
no+=5;
console.log(no);
// no = no - 5;
no-=5;
console.log(no);
//no = no * 5;
no*=5;
console.log(no);
// no = no / 5;
no/=5;
console.log(no);
//no = no % 5;
no%=5;
console.log(no);
