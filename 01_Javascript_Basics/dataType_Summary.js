// Primitive DataType
//Generally 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100 //Number
const scoreValue = 100.3  //Number

const isLoggedIn = false  //Boolean
const outsideTemp = null  //Null
let userEmail ;  //undefined

const id = Symbol('123')  //unique value
const anotherId = Symbol('123') //unique value

// console.log(id === anotherId);  //Symbol is for uniqueness that's why it is false.

const bigNumber = 253464355151425343n  //last me n for bigInt

//Reference (Non-Primitive)
//Arrays,Objects,Functions

const heros = ["Shaktiman","Nagraj","doga"]; //Arrays

//Objects => Storing in the variable named as myObj
// (anything inside curly braces is Object whether it is Arrays,Number,Function,String or another Arrays)

let myObj = {
    name: "Shashi",
    age: 22
}

//Function => Storing in a variable named as myFunction

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof myFunction);

