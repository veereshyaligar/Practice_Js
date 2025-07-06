function addNum (num1 , num2){
     console.log(num1+num2);
}

addNum(5,10);
addNum(3,"a");
addNum(6,"4");
addNum(2,null);

function loginUser(username){
     if(!username){      // if(username === undefined)
       console.log("Enter username");
       return
     }

     return `${username} logged in`
}


console.log(loginUser("veer"));
console.log(loginUser());


function calculatePrice(num1){
  return num1;
}

console.log(calculatePrice(10));

function calculatePrice(... num1){  // ... -> rest or spread operator
  return num1;
}

console.log(calculatePrice(15,11,12,23));  // returns array of all values


function calculatePrice(val1 , val2 , ... num1){  // ... -> rest or spread operator
  return num1;
}

console.log(calculatePrice(15,11,12,23));  // returns    val1-15 , val2- 11 , ...num2 - [12,23]

const user = {
  username : "ver",
  price : 100
}

function handleObject (anyObject){
  console.log(`username is ${anyObject.username} and price si ${anyObject.price}`);
}


handleObject(user)

handleObject({
  username :"sam",
  price : 800
})

const array= [100,200,300,400]

function returnArray(getArrayVale){
 return getArrayVale[1];
 }

 console.log(returnArray(array));

 console.log(returnArray([23,35,56,8]));


//------------------Scopes---------------------------


 // don't use var - dosen't consier the scope
var c= 100;

if(true){
 let a=10
 const b =20
  c=10  // after declaring again values will get changed

  console.log(b);
  console.log(b);
}

//console.log(a);  both a and b cant access from outside
//console.log(b);

console.log(c); // dont use var -> can be access anywhere


if(true){
 const name ="ver"

   if(name=== "ver"){
     const web= "website"
     console.log(web+" " + name);
   }
   //console.log(web) ->throws error -cant access outside inner if block
}

//console.log(name) // trows error - can;t access outside if block

//-----------------INTERESTING --------------------


console.log(addOne(5));  //  here we can access the below function its not declared

function addOne(number){
  return number+1
}

 //console.log(addTwo); -->throws error function is declared below

const addTwo= function (number){
  return number+2
}

console.log(addTwo);  //--> gives objects type as Function
console.log(addTwo(5)); // -> gives results as we passing 5 as number