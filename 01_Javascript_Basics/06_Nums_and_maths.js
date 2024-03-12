const score = 400

const balance =  new Number(100)  //You can explicity define that the balance is an number.
// console.log(balance); //[Number : 100]
// console.log(score);// 400
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); //100.00 

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));  //124
// console.log(otherNumber.toPrecision(2));  //1.2e+2
// console.log(otherNumber.toPrecision(4));  //123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000
// console.log(hundreds.toLocaleString()); //1,000,000


//*****************Maths**************** */
// console.log(Math); //It is a object [Math] {}
// console.log(Math.abs(-4)); //Absolute value : Changes negative value to positive value
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5  (Upper value)
// console.log(Math.floor(4.6)); // 4  (lower value)
// console.log(Math.min(3,4,5)); // 3  (lower value)
// console.log(Math.max(3,4,5)); // 5  (higher value)

// console.log(Math.random());  // values between 0 and 1(decimal values)
// console.log(Math.random()*10);  //Here it generates values between 0 and 10(not including)
// console.log((Math.random()*10)+1); //Here it generates float values between 1 and 11(not including)
// console.log(Math.floor(Math.random()*10)+1); //Here it generates integer values between 1 and 11(not including)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min); //To get the value within a specified range (min,max)

