// function definition
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName // Reference
// sayMyName() // Execute

//Here function is considering everything as a number but when user didn't pass a number then there is issue.
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(3,4)

// If user gives any other value then the output will differ
// addTwoNumbers(3,"4") // taking the whole as a string.
// addTwoNumbers(3, null)

// const result = addTwoNumbers(3,5)
// console.log("Result : ", result); // undefined (why?  Because the function is not returning any value its just printing the value)

// Function which returns
function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5) //here the function is not printing anything here it is returning some value
// console.log("Result : ", result);

// User login hua h uske baad hm usko message dikhana chahte h
function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("Please Enter a username");
    //     return
    // }
    if (!username) {
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shashi"))
// console.log(loginUserMessage("")) // when you pass empty string value but what if user doesn't provide a value means see next line
// console.log(loginUserMessage()) // undefined , for this we use if-else so that user don't provide that type of value.


// When you don't know how much items your user added to cart then how will you add all these items. (How many arguments you have to take?)

// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,600)) //Only the first value get printed. now to solve this problem we use rest operator.
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,600)) //We got an array. Now we can loop through array and add all items in array.

// (...) -> This is also called rest operator and spread operator too depending upon the usecase we call different names.

// If you find this situation then ..
function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,600,2000)) // first two value is stored in val1 and val2 and the rest is stored in array now. [600,2000]


// How can we pass object in function.
const user ={
    username : "shashi",
    price : 199
}

// For anyObject not only for user object (Always check typeSafety(spelling))
function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
// handleObject(user) //Calling the object.
//You can also do this 
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); //Same as Object
console.log(returnSecondValue([200,400,600,800]));