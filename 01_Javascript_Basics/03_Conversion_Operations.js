// let score =  33
// let score = "33"
// let score = "33abc"
// let score = null 
// let score = undefined
// let score = true
let score = "hitesh"

// console.log(typeof score);

let valueInNumber = Number(score)  //Conversion from String to Number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//Conversion in Number
//"33" => 33
//"33abc" => NaN(NOt a Number)
//true => 1 / false => 0


// let isLoggedIn = 1   //true  0 => false
// let isLoggedIn = ""   // false
let isLoggedIn = "hitesh"    //true

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


let someNumber = 33

let StringNumber = String(someNumber);
// console.log(StringNumber);
// console.log(typeof StringNumber);



//****************Operations*****************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //2^3 = 8
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Shashi"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2);   //122
// console.log(1 + 2 + "2");   //32

// If one or both operands are strings, the + operator is used for string concatenation. If both operands are numbers, it performs addition. JavaScript performs type coercion to handle these situations.
// console.log(+true); //bad Practice
// console.log(+"");   //bad 

let num1 , num2 , num3
num1 = num2 = num3 = 2+2  //bad practice

let gameCounter = 100
// gameCounter++;
++gameCounter;
// console.log(gameCounter);