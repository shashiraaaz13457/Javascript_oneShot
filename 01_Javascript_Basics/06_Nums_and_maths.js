const score = 400

const balance =  new Number(100)  //You can explicity define that the balance is an number.
console.log(balance); //[Number : 100]
console.log(score);// 400
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); //100.00 

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));  //125
console.log(otherNumber.toPrecision(2));  //1.2e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000
console.log(hundreds.toLocaleString()); //1,000,000