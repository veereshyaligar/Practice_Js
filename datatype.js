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

const myFuntion = function (){
   console.log("hello funtion")
}


console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFuntion);


