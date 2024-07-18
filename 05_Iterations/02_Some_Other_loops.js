// for of

const arr = [2,2,3,4,5];
//No increment / decrement needed in this loop.
for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('IN',"India")// Unique value in maps.(Not print it second time)
map.set('US',"United States of America")
map.set('Fr',"France")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key,value] of map) { //Destructing of array
//     console.log(key, ':-' , value);
// }
// for (const [key] of map) {
//     console.log(key);
// }

// const myObject = { //Objects are not iteratable.
//     'Game1' : 'NFS',
//     'Game2' : 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key, ":-" , value);
// }

// For Object - We use For-in loop(For-of loop is not used)
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    swift : 'swift by Apple',
    py : 'Python'
}

// for (const key in myObject) {
//     console.log(key);
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

//For-in loop for array.

const programming = ["js","rb","py"]

//This gives the the key i.e. index (For-of loop directly gives the value but not in case of for-in loop)
// for (const key in programming) {
//     console.log(key);
// }

//This will gives the value at that particular index.
// for (const key in programming) {
//     console.log(programming[key]);
// }

//Now for-in loops for Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('IN',"India")
// map.set('US',"United States of America")
// map.set('Fr',"France")

// //Map is not iteratable(NO result)
// for (const key in map) {
//     console.log(key);
// }

//For-each loop(High Order function)
const coding = ["js","ruby","javascript","Java","Python"]

//Array's me built-in method h ye for-each loop
//You have to pass the CallBack function
// Callback function - NO name of function is there .
//normal function
// coding.forEach(function (item) {
//     console.log(item);
// })

//Arrow function
// coding.forEach( (item) => {
//     console.log(item);
// })


//Q. Can I pass on the function in the forEach loop
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe); //Give only the reference (don't execute i.e. printMe())

//More Parameter Access
coding.forEach( (item,index,arr)=> {
    // console.log(item,index,arr);
})

//Common Scenario which you will face [{},{},{}]
//Object inside an Array (how to access Object Properties)

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})