let myDate = new Date()

console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,0,23) // months start from )0. 0-Jan , 1-Feb . 2-Mar
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//to make more customizable

console.log(newDate.toLocaleString('default',{
 weekday:"long",
}))
