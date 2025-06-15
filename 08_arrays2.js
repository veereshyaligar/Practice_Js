const marvel_heroes= ["thor","Ironman","spderman"]
const dc= ["superman","flash","batman"]

//marvel_heroes.push(dc)  // here dc array will get pushed to last index of marvel_heores

console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

//concat

const allheroes=marvel_heroes.concat(dc) // this method returns new array.

console.log(marvel_heroes); //preinting original array

console.log(allheroes); // tow arrays get mergered and return new array

//spread method can merge all elements

const allNewArr= [...marvel_heroes, ...dc]

console.log(allNewArr);


const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArr.flat(1) // number indicates how much depth ot has to go

console.log(anotherArr);

console.log(real_another_array); // for 1 depth

const real_another_array2 = anotherArr.flat(Infinity)


console.log(real_another_array2); // when we don't know the depth


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) //throws empty list , need to give array from keys/values


let score1= 100
let score2 = 200
let score3=300

console.log(Array.of(score1,score2,score3));




