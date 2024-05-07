// const tinderUser = new Object() 
// BOth are same only difference is upper wla singleton object and neeche wla non-singleton object h
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//You can make objects inside objects.
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

// Merging the objects
const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = {obj1,obj2}
// Object.assign -> copies all enumerable own properties from one or more source objects to a target object.
// Object.assign({target},source) documentation
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}; //Using spread operator (...) Use this
// console.log(obj3);


// Array ka object
const users = [
    {
        id : 1,
        email: "h@gmail.com"
    },
    {
        id : 1,
        email: "h@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Making array of keys only
console.log(Object.values(tinderUser)); // Making array of values only
console.log(Object.entries(tinderUser)); // Each key value pair made a separate array inside an array.

// We use this hasOwnProperty to find out whether this value exist or not.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //True
console.log(tinderUser.hasOwnProperty('isLogged')); //False