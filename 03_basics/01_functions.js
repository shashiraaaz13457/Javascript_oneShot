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
console.log(loginUserMessage()) // undefined , for this we use if-else so that user don't provide that type of value.
