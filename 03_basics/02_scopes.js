//Global scope
// var c = 300
let a = 300

// local scope(block scope)
if (true) {
let a = 10;
const b = 20;
// console.log("Inner: ", a);
// var c = 30;
}


// console.log(a);
// console.log(b);
// console.log(c);  // var is printing outside the scope. Even if you declare variable outside the scope then also it overides by the inside the scope value.

// Closure -> Child function can access the parent variable but child variable cannot be accesed by parent function.
function one(){
    const username = "Shashi" //As a global variable working for function two so function two can use it.

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //Can't be accessed outside the scope

    two()
}
// one()

if(true){
    const username = "shashi"
    if (username === "shashi") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // Can't be accessed
}
// console.log(username); //Can't be accessed outside scope

// +++++++++++++ Interesting +++++++++++++++++
// Normal function
console.log(addOne(5)) //No issue here.

function addOne(num){
    return num+1
}

// addOne(5)

// variable can't be accessed before declaration in this case. -> mini hoisting (Let,const)
// for var -> it gives undefined.(In let and const it gives reference error)
// Here function can't be accessed before declaration-> hoisting 
console.log(addTwo(5)); // Can't be accessed why? Normal function can access but Expressions don't
// Expression 
const addTwo = function(num){
    return num+2
}

addTwo(5)