const UserEmail = [] //Truthy value
// const UserEmail = "" // falsy value

if (UserEmail) {
    console.log("Got user Email");
} else{
    console.log("DOn't have user Email");
}

// Falsy value - 0,-0,false,BigInt(0n),undefined,null,"",NaN
//Truthy value - "0",'false', " ",[],{},function(){}

//For checking array is empty
if(UserEmail.length === 0){
    console.log("Array is empty");
}

// For checking whether object is empty

const emptyObj ={}
//Object.keys will return array of emptyObj keys then use .length property to find whether is empty or not.
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

//Nullish Coalescing Operator(??) : Null , undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; //15

val1 = null ?? 15 ?? 10

console.log(val1);

//Ternary Operator(syntax)
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice > 80 ? console.log("More than 80") : console.log("less than 80");
