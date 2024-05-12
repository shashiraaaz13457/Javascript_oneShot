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

// chai(); // Here when the function prints this keyword then I get many values.(Global values,and many things)


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

chai();

//Function v/s Arrow Function
// Arrow functions do not have their own this context. They inherit this from the surrounding lexical context.
// This behavior makes arrow functions particularly useful when you want to preserve the value of this from the surrounding code.
//Arrow functions do not have their own arguments object. Instead, they inherit arguments from the surrounding lexical context.

//Syntax of Arrow function
// () => {}
