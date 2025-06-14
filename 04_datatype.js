const score=100
const scoreValue=100.03

const id =Symbol('123')  //symbol is primitive datatype , its guaranteed to be unique
const id2= Symbol('123')  // even if we create two symbol wih same description those are unique

console.log(id);
console.log(id===id2);

const bigNumber =238836823686368n // number can't store big values so if we put n it consider as bigInt

console.log(bigNumber);

//------------------------------------------

const heros= ["ironman","superman","spiderman"];

let myObj= {
  name : "veer",
  age : 24
}

const myFunction = function (){
   console.log("hello function")
}

console.log("-----------------------------------------------");

console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


//--------------------------------------------------------
console.log("-----------------------------------------------");

//satck (priomitive) ,Heap (Non Primitive)

let name= "youtube"
let anotherName =name

anotherName="instagram"

console.log(name);
console.log(anotherName);

let user = {
   email: "user@google.com",
   upi : "user@ybl"
}

let usertwo = user

//user varibale is in stack has the refrence of email and upi in heap
// here usertwo has the refernce of user in heap

usertwo.email="veer@gmail.com"

console.log(user.email);
console.log(usertwo.email); // here both print veer@gmail.com becuase both has  refernce of same email and upi in heap



