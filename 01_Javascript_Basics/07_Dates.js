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
// let myCreateDate = new Date(2023,0,23,5,3) //You can use differnt Parameters
// console.log(myCreateDate.toLocaleString()); //Includes time also
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023");
// console.log(myCreateDate.toLocaleDateString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreateDate.getTime());

//converting to second
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // As it starts from 0.
console.log(newDate.getDay()); //starting from monday

//Very Imp in Dates
//You can specify more configuration whatever you wants in the Date.
newDate.toLocaleString('default', {
    weekday: "long",
})


