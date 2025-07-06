function addNum (num1 , num2){
     console.log(num1+num2);
}

addNum(5,10);
addNum(3,"a");
addNum(6,"4");
addNum(2,null);

function loginUser(username){
     if(!username){
       console.log("Enter username");
       return
     }

     return `${username} logged in`
}

console.log(loginUser("veer"))