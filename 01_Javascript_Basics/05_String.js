const name = "hitesh" //This is how we declare String (It also Invoke Object)
const repoCount = 50

// console.log(name + repoCount + " Value"); //Old Syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //New Syntax and good to use.

const gameName = new String('hitesh-hc') //Here also a String declared

// Some methods in String
// console.log(gameName[0]);
// console.log(gameName.__proto__);  //__proto__ it is a method to see object

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));  // t
// console.log(gameName.indexOf('t')); // 2

//slice of String
const  newString = gameName.substring(0,4) //hite i.e. not including last index
//We cannot give negative value to a substring.
console.log(newString);

const anotherString = gameName.slice(-8,4) //ite  i.e. tracing from opposite direction
console.log(anotherString);

const newStringOne = "  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); //Remove the spaces in String

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20', '-'));  //Replace the number by the given number.
console.log(url.includes('hitesh'));  //We can check with the help of includes method whether this keyword is present or not.

console.log(gameName.split('-'));  //It split the string based on "-" and the output will be an array.