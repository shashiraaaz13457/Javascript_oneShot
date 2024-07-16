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
    // console.log(i);
// }

for (const [key,value] of map) { //Destructing of array
    console.log(key, ':-' , value);
}
for (const [key] of map) {
    console.log(key);
}

// const myObject = { //Objects are not iteratable.
//     'Game1' : 'NFS',
//     'Game2' : 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key, ":-" , value);
// }

