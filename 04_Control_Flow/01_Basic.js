//if-else
// if(true){}

const temperature = 41

// if(temperature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

//Scoping

// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

//Shorthand Notation
const balance = 1000
// if(balance > 500) console.log("test"); //Implicit Scope


// if(balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

//Real-life usage
const userLoggedIn = true
const debitcard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard ){
    console.log("Allow to buy course");
}
if(loggedInFromGoggle || loggedInFromEmail){
    console.log("User Logged In");
}

//Switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case");
        break;
}