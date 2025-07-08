if(2 =='2'){  // here it won't check datatype level both are equal
 console.log("executed") // it prints as if is true
}

if(2==='2'){ // here it will check datatype so both are not same
 console.log("executed ") // won't be executed
}

 // falsy values

 // false , 0,-0,BigInt 0n , "",null , undefined ,NaN

 // truthy values

 // 'false', "0" ," ",[] , {} ,function () {}


// nullish coalescing Operator  (??) : null undefined

val1 = 5 ?? 10 // it will print 5
val2 = null ?? 15 // it will print 15

val3 =undefined ?? 78 // print 78

// Terniary operator // this and above oeprator are different
//condition ? true :false


const arr = [1,2,3,4,5]

for( const num of arr){
 console.log(num);
}

const map = new Map()

map.set('1' ,"ONE")
map.set ('2' ,"TWO")
map.set('3' ,"THREE")
map.set('4',"ONE") // you can write value as same
map.set ('1',"ONE") // map won't consider same key value pair key should be unique
map.set('1' ,"one") // key value pair will get updated


console.log(map);

// destructuring key and values

for( const [key , value] of map){
   console.log(key , ':-' , value);
}


for( const value of map){  // this is not destructed // it will print together
   console.log(value);
}


const myObject ={
   cpp : "c++",
   js  : "javascript",
   rb : "ruby"

}


for ( const key in myObject){
   console.log( `${key} shortcut is for ${myObject[key]}`)
}

const programming =['c' , 'java' ,'python']

for (const key in programming){
  console.log(programming[key]);
}

programming.forEach (function (val) {
 console.log(val);
})

programming.forEach ( (val) => {
console.log(`language ${val}`);
})


function printMe (item){
 console.log(`printing from function ${ item}`);
}

programming.forEach(printMe);

programming.forEach ((item , index , arr) => {
  console.log(item ,index ,arr);
})

const coding = [

    {
       language : "javascript",
       name  : "js"
    },
    {
           language : "cpp",
           name  : "c++"
    },
    {
               language : "ruby",
               name  : "rb"
    }

]

coding.forEach((item)=>{
    console.log(item.language);
})


const lang =['c' , 'java' ,'python']

const val = lang.forEach ((item) => {
 return item;
})

console.log(val);

// ---------------------filter --------------------//

const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums= myNums.filter((num) => num>4)

const newNums1= myNums.filter((num) => {
  return  num>4  // here if we use {} then need to return
})

console.log(newNums);

console.log(`returned values ${newNums1}`);

// sing for each loop

const newArry=[]

myNums.forEach ((num)=>{
  if(num>5){
  return newArry.push(num)
  }
})

console.log(newArry);



const nums =[1,2,3,4,5,6,7,8,9,10]

const res = nums.map((num)=> num*10)
                .map((num)=> num+1)
                .filter ((num)=> num>=40)

console.log(res)


const number = [1,2,3]

const total =number.reduce (function (acc, curVal) {
 console.log(`acc :${acc} and curVal ${curVal} `);
 return acc+curVal
},0)


console.log(total);


const total2 = number.reduce ((acc,cur) => acc+cur ,0);

console.log(total2);