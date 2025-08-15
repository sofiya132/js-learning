// Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;


if (num1 > num2) {
    console.log("num 1 is greater than num 2 ");
}
else {
    console.log("num1 is not greater than num2");
}

//check if a string is equal to another string:

let username = "coffee";
let anotherusername = "coffee";

if (username != anotherusername) {
    console.log("pick another username");
}
else {
    console.log("you can pick this");
}


//Checking if a variable is a number or not:

let score = [];
if (typeof score === "number") {
    console.log("yep, this is a number");

}
else {
    console.log(" No that is not a number ");

}

//checking if a boolean value is true or false:

let isteaready = true;
if (isteaready) {
    console.log("tea is ready ");
}
else {
    console.log("tea is not ready");

}

//checking if a array is empty or not:

let items = ["item1"]
console.log(items.length);

if (items.length === 0) {
    console.log("array is empty");

}

else {
    console.log("array is not empty");

}

