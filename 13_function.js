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