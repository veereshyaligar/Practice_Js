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