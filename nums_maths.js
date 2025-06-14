const score=40;

console.log(score);

const balance= new Number(10);
console.log(balance); // specififcally number

console.log(balance.toString().length);

const num= new Number(20.3435)

console.log(num.toFixed(2));

const num1= new Number(21.8935);
console.log(num1.toPrecision(3)); // it includes decmal -> 21.9
console.log(num1.toPrecision(2)); //it gives 22


const num2= new Number(121.8935);
console.log(num2.toPrecision(3)); //gives 122

const num3= new Number(1121.8935);
console.log(num3.toPrecision(3)); //gives 1.12e+3

const  hundred = 1000000;
console.log(hundred.toLocaleString());


// we have many other MIN_VALUE , MAX_VALUE , num.isInteger  many other

//-----------------------------------------------------

console.log("--------------------------Maths--------------------------");


console.log(Math); //abs convert to '-ve' values to positive
console.log(Math.round(4.6)) // 5

console.log(Math.ceil(4.2))  // 5 -upper value
console.log(Math.floor(4.9)) // 4 -lower value

console.log(Math.min(4,5,10,2,8));  // min,max

console.log(Math.random().toFixed(2)); // random values are n rabge of 0 to 1
console.log(Math.random()*10); // can be 0.3 so to avoid that case we can include +1 lke below
console.log((Math.random()*10)+1);


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)

