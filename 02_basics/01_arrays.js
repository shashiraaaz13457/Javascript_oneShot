//Array

// const myArr = [0,1,2,3,4,5,true,"hitesh"] //you can write different datatypes as well.
const myArr = [0,1,2,3,4,5] //Array Declaration(literal syntax)

const myArr2 = new Array(1,2,3,4) //Array Declaration(Array constructor syntax)
// console.log(myArr[0]);

//Array Methods

// myArr.push(6); 
// myArr.push(7);
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1 (Not Present)
// console.log(myArr.indexOf(1));  //1 (present at 1st Index)

// const newArr = myArr.join() //Join converts the array into string separated with comma.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) //not including last index
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)

console.log("C ", myArr);
console.log(myn2);

//Main difference between slice and splice is that slice don't change the original array whereas splice change the array i.e remove the element till the mentioned range(including last). 