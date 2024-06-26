// this keyword refers to the current context.

const user = {
    username : "Shashi",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); //Empty object (In node Environment)

// function chai(){
//     console.log(this);
// }

// chai(); // Here when the function prints this keyword then I get many values.(Global values,methods and many things)


// We can use this keyword inside an object but not in function as you can see..
// function chai(){
//     let username = "shashi"
//     console.log(this.username); // Undefined
// }
// chai();

//Both are same (above)
// const chai = function chai(){
//     let username = "shashi"
//     console.log(this.username);
// }

//Arrow function
const chai = () => {
    let username = "shashi"
    console.log(this); //Same Empty object
    console.log(this.username); // undefined
}

// chai();

//Function v/s Arrow Function
// Arrow functions do not have their own this context. They inherit this from the surrounding lexical context.
// This behavior makes arrow functions particularly useful when you want to preserve the value of this from the surrounding code.
//Arrow functions do not have their own arguments object. Instead, they inherit arguments from the surrounding lexical context.

//Syntax of Arrow function
// () => {}

// const addTwo = (num1,num2) => {
//     return num1 + num2 //Explicit return
// }

//Implicit return
// const addTwo = (num1,num2) => num1 + num2 //Gives the same value
// const addTwo = (num1,num2) => (num1+num2) //This will also work but don't use curly braces if you use it then you have to use return keyword.
const addTwo = (num1,num2) => ({username: "shashi"}) // For Object 

console.log(addTwo(3,4));
