const accountId=23355
let accountEmail="123@mail.com"
var accoutPassword="12345"
accoutnCity="hubli"


//accountId=15 -reassigning the value throws error as we are assigning to const variable (not allowed)

accountEmail="veer@mail.com"

console.log(accountId);
console.log(accountEmail);

/*
Prefer not use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accoutPassword,accoutnCity])


let accountState; // not decvlared with value and value is undefined if we print

console.log(accountState)