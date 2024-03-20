const marvel_heros = ["thor","IronMan","Spiderman"];
const dc_heros = ["superman","flash","batman"];
// marvel_heros.push(dc_heros); //push will push in the same array but concat return the new array.

// console.log(marvel_heros); // It will take the value of array as its 4th index.(Array inside Array) not good
// console.log(marvel_heros[3][1]); //Now the inside array's 2nd element will get accessed through this.

// const allHeros = marvel_heros.concat(dc_heros);
//Here it will not create array inside array it will merge both the arrays and return the new array.
// console.log(allHeros); //return the new array.

//Spread Operator(...) -> All the elements inside the array acts as individual element .
const all_new_Heros = [...marvel_heros,...dc_heros]
// console.log(all_new_Heros); //Same output as concat but its good to use.

//If you face any situation like this:
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity); //You can also give exact depth.

console.log(real_another_array); // Merge all the elements in the array and return the new array.


console.log(Array.isArray("Hitesh")); //Asking Is it a Array? return true or false value
console.log(Array.from("Hitesh")); //Converting String to Array.
console.log(Array.from({name: "hitesh"})); //Not converting to array ,it gives empty array. //Intresting Case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //it returns a new array containing all the values .