//Dates

let myDate = new Date()
// console.log(myDate); //giving something which can't be understood (YY/MM/DD something after that)
// // console.log(myDate.toString());  // Converting to String and returning Day Month Date Year Time and GMT
// // console.log(myDate.toDateString()); //Converting to String and returning Day Month Date Year
// console.log(myDate.toISOString()); //Same as Normal log(myDate) 
// console.log(myDate.toJSON()); //Same as Normal log(myDate) 
// console.log(myDate.toLocaleDateString()); //What noramlly we use the format (dd/mm/YY)
// console.log(myDate.toLocaleString()); //What noramlly we use the format (dd/mm/YY) including Time Am/pm
// console.log(myDate.toTimeString());  //returns Time and GMT

// let myCreateDate = new Date(2023,0,23) //You have inserted your date
// console.log(myCreateDate.toDateString());
let myCreateDate = new Date(2023,0,23,5,3) //You can use differnt Parameters
console.log(myCreateDate.toLocaleString()); //Includes time also
