// Singleton ->  When we declare objects from constructor then it will be singleton , if we use literal to declare object then it will not be a singleton.
// Object.create -> Constructor method ke through

//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh", //Here you can define key(name) and value ("Hitesh")
    "full name" : "Hitesh Choudhary", //To access these kind of object value you have to use JsUser["email"] so that they treat it as a String.
    // mySym : "mykey1",
    //How to use Symbol as a key in Object (In Symbol datatype)
    [mySym] : "mykey1",
    age: 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isloggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
};  //object declaration through literals.

//How to access objects
// console.log(JsUser.email); //1st Method
// console.log(JsUser["email"]); //2nd Method
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym); //It will print the Symbol but its datatype is not Symbol.
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

//how to change in object
// JsUser.email = "hitesh@chatgpt.com"
// //If we donot want to not change the object 
// Object.freeze(JsUser); //It will freeze the object
// JsUser.email = "hitesh@microsoft.com" //No changes being made here.
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);  //this keyword -> It helps to access the properties inside the object.
}
// console.log(JsUser.greeting); //Function Anonymous (Function didn't get executed , its just returned the referenced type)
console.log(JsUser.greeting()); //Printing the function but showing undefined. (Not a function)
console.log(JsUser.greeting2());
