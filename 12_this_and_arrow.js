const user=  {

      username : "veer",
      price : 99,
      welcomeMessage: function () {
       console.log(`${this.username} , welcome to website`);
       console.log(this);
      }
}

//console.log(user.welcomeMessage); // ->gives  object type function
user.welcomeMessage() // ->prints message

user.username = "sam"

user.welcomeMessage()  // here prints sam , according to the context it changes

console.log(this); // here it prints {} ->empty

// in browser if we try to print this-> it gives window object ->window object is the global object in the browser

function chai (){
  let username = "veer"
  console.log(this);
  console.log(this.username); // it says undefined ->  only in Objects we can use this not in function
}

chai();




const chai1= function chai (){
  let username = "veer"
  console.log(this.username); // it says undefined ->  only in Objects we can use this not in function
}

chai1()

const chai2=  () => {  // we can use arrow by replacing function keyword
  let username = "sam"
  console.log(this); // it says undefined ->  only in Objects we can use this not in function
  console.log(this.username) // -> gives {} empty results
}

chai2()

// ---------Important -------------

const addTwo = (num1,num2) => { // here we used arrow and {} braces with return keyword
  return num1+num2 ;
}

console.log(addTwo(3,5));

const add = (num3,num4) => num3+num4 // here we can directly write when we have single line

console.log(add(1,2));

const add2 = (num5,num6) => (num5+num6) // we can use () , if we use {} braces then we need to use return keyword

console.log(add(2,3));

const name = () => ({username:"veer"}) // to return the object we have to wrap in () and objects should be in {}

console.log(name());  // -> returns object


//---IMPORTANT IIFE ----------------

 // Immediately Invoked Function Expressions (IIFE)

// important reason -> because of global variable functions may get polluted because of global variable pollution we can invoke function immediately
(function chai (){   // if we wrap this function with () and then for execution ()
  // function is Names IIFE because its named as Chai
 console.log("Immediately executed");
}) ();        // here () for function declaration and another () for execution
   // ; we have to write ; otherwise we can't use another function


// arrow function

( () => {
  console.log("successfully executed");
}) ();

// using parameter

((name) =>{
 // Simple IIFE not named anything
 console.log(`Name is ${name} `)
}) ('veer');



