//Non-primitive datatypes

//objects

let username = {
    firstname : "hitesh",
    isloggedin : true,
 
};


//const myfirstname : "hamsa";
//  myfirstname = "hani";  this will give error
 username.firstname= "hamsa";
 username.lastname = "priya"; // we can also add new values

 console.log(username.firstname);
 console.log(username.lastname);
 console.log(username); 
console.log(typeof(username));


// when we have spaces in between
let id={
   "first name": "ankit", // it is written in " "
    "islogged": false,
};

console.log(id["first name"]);// and while ascessing it has to be written like [" "] this 
console.log(id["islogged"]);// we can follow this method even when thier is no spacing

let today = new Date();
console.log(today.getDate());

//Array

let anotheruser = [ "hitesh" , true];
console.log(anotheruser[1]);

//type-conversion
console.log("1"+1);//js does implicit conversion it assumes that the second data is also a string and gives 11 as the output

let isvalue=true;
console.log(isvalue + 1); // here  it assumes isvalue as 1 and does implict conversion, the output will be 2
console.log(Number (null));// here we are explicitly converting null to a number
console.log(Number (undefined));// NAN i.e not  a number and if u check typeof for this it will give Number
console.log(typeof(Number (undefined)));
