//For-loop
// for (let index = 0; index < 10; index++) {
//     // console.log(index);
//     const element = index;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outerloop value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`InnerLoop Value ${j} and Inner loop ${i}`);
//     }
// }

// let myArr = ["flash","batman","superman"];

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
// }

//while-loop
// let index = 0; // Initialization
// while (index <= 10) { //Condition
//     console.log(`Value of index is ${index}`);
//     index = index + 2; //Increment
// }

let myArray = ['flash','batman'];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

//do-while loop
let score = 11;
do{
    console.log(`Score is ${score}`);
    score++;
}while (score <= 10);