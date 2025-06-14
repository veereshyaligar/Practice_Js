let score="33"

console.log(typeof score);

let valueInInt = Number(score);

console.log(typeof valueInInt);

//---------------------------------

let score1="33aabb"

console.log(score1);

let valueInInt2 = Number(score1);  //converting to number
console.log( valueInInt2);  //gives NaN
console.log(typeof valueInInt2);


// "33"= 33
//"33qwd"=NaN
// true=1 ; and false=0;

//-----------------------------------------


let isloggedIn= 1

let booleanisLooggedIn = Boolean(isloggedIn);  //converting to boolean

console.log(booleanisLooggedIn);
console.log(typeof booleanisLooggedIn);


//0-> true , 1->false
// "" ->false
// "veer" ->true

//--------------------------------------------------
console.log("---------Operations-----------")
console.log("2"+3);
console.log(2+"3");
console.log("1"+2+3);
console.log(1+2+"3");
console.log(true);
console.log(+true);
console.log(+"");


//-----------------------------------------------------


console.log("--------------comaprison operator-------------");

console.log(null >0);
console.log(null ==0);
console.log(null >=0);


console.log("---------");
console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);

console.log("---------");
console.log("2" === 2);  // strict equality -> fasle 3 === it wonr convert and check its directly compare
console.log("2" == 2);  // true its convert string to number and check equality
console.log(2 == 2);
