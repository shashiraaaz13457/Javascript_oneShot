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

//Nullish Coalescing Operator(??) : Null undefined
