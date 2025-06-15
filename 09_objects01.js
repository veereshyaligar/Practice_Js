//singleton
//object.create

const mySm= Symbol("key1"); //used to create unique value

//object literals
const JsUser = {
  name: "Hitesh",
  "full name" : "veer my",
  [mySm] : "mykey1",  // when we decalre mySm then datatype is String , but [mySm] ->Symbol
  age :18,
  location: "bengaluru",
  email: "hites@123",
  isLoggedIn: false,
  lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // can't be acessed with JsUser.full name
//console.log(typeof JsUser.mySm , JsUser.mySm); --> only whne its s string



console.log(JsUser[mySm]);
console.log(typeof JsUser[mySm]); //-Symbol typeof is string
console.log(typeof mySm); //-mySm type is Symbol

JsUser.email = "123#gnail.com"

//Object.freeze(JsUser); // after freezing we cant cahnges values

JsUser.email = "micro#gnail.com"
console.log(JsUser.email);

console.log(JsUser);

JsUser.greeting = function () {
 console.log("hello Js User");
}
JsUser.greetingTwo = function (){
 console.log(`Hello Js User, ${this.name}`);
}


console.log(JsUser.greeting); // gives funtion (anonymous)
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());