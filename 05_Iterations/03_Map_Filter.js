// const coding = ["js","ruby","java","python"]

//For-each don't return a value.
// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item //undefined
// })

// console.log(values);


//Filter (It will return the value)
const myNums = [1,2,3,4,5,6,7,8,9,10]
//Syntax - filter(Callback function (put some condition inside the function))
// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

//Same thing achieved via for-Each loop
// const newNums = []
// myNums.forEach( (num)  => {
//     if (num > 4) {
//         // newNums.push(num)
//         console.log(num);
//     }
// })
// console.log(newNums);

const books = [
    {title : 'BookOne', genre: 'Fiction',publish : 1981, edition : 2004},
    {title : 'BookTwo', genre: 'Non-Fiction',publish : 1992, edition : 2008},
    {title : 'BookThree', genre: 'History',publish : 1999, edition : 2007},
    {title : 'BookFour', genre: 'Non-Fiction',publish : 1989, edition : 2010},
    {title : 'BookFive', genre: 'Science',publish : 2009, edition : 2014},
    {title : 'BookSix', genre: 'Fiction',publish : 1987, edition : 2010},
   {title : 'BookSeven', genre: 'History',publish : 1986, edition : 1996},
];

let userbooks = books.filter( (bk) => bk.genre === 'History')
userbooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History')
// console.log(userbooks);

//Example of filter
// const numbers = [1, 2, 3, 4, 5, 6];
// // const evenNumbers = numbers.filter(num => num % 2 === 0);
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // [2, 4, 6]

//Map(It also return the value)
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);

//Same thing can be achieved via forEach
// myNumbers.forEach( (num) => {
//     console.log(num+10);
// })

//Chaining
const newNums = myNumbers
                .map((num) => num * 10) //firstly it will convert it into [10,20,...]
                .map((num)=> num + 1) // then that array is going to add 1 [10+1,20+1,....] 
                .filter((num) => num >= 40)
console.log(newNums);