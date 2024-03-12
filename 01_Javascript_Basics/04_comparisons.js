// console.log(2>1);
// console.log(2>=1); // true(something unusual) Because this operand checks for the left operand is greater or not only.
// console.log(2==1);
// console.log(2!=1);
// console.log(2<=1); //false

//For different datatypes
// console.log("2" > 1);  // Here javascript implicitly convert the string into Number.
// console.log("02" > 1);

//Null Case(Comparison convert null into a number or in NaN, treating it as 0) not equality sign
// console.log(null > 0);   //false 
// console.log(null >= 0);  //true
// console.log(null == 0);  //false (not treating null as 0)
// console.log(null < 0);  //false

//undefined Case
// console.log(undefined == 0); //false
// console.log(undefined > 0);  //false
// console.log(undefined < 0);  //false
// console.log(undefined < 1);  //false
// console.log(undefined == 1);  //false
// console.log(undefined > 0);  //false

// (===) Strict Check (Check Value as well as datatype)
// console.log("2" === 2);