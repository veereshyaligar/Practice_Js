const myarr=[1,2,3,4,5]

console.log(myarr);

const myarr2= new Array(1,2,3,4)
console.log(myarr[1]);

//myarr.push(6)
//myarr.push(7)
//myarr.pop()


myarr.unshift(9)

console.log(myarr);

myarr.shift()

console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(9));
console.log(myarr.indexOf(3));

const newArr= myarr.join()

console.log(myarr);
console.log(newArr);
console.log(typeof newArr);

//slice ,splice


const arr= [1,2,3,4,5,6,7,]

const arr1= arr.slice(1,3) // slice includes  elemnets at index 1 and excludes 3 and give final output without changing original array.

console.log(arr1);
console.log("A", arr);  //no change in original array

const arr2= arr.splice(1,3) // splice includes  elemnets at index 1 and excludes 3 and give final output only remaining  array.

console.log(arr2);
console.log("B", arr); //change in original array ->t gives elements excluding range 1 to 3 index elements
