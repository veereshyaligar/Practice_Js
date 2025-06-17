const user =new Object()

const user2= {}

user2.id="123"
user2.name= "sam"
user2.isLoggedIn= false


console.log(user);
console.log(user2);

const regualruser = {
  email : "somemail@.com",
  fullname : {
       userfullname : {
         firstname : "hello",
         lastname :"bye"
       }
  }
}

console.log(regualruser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",3:"b"}

//const obj3={obj1,obj2}
//console.log(obj3);

//const obj3 = Object.assign({},obj1,obj2)  // all objects combined and results in {}
//const obj3 = Object.assign(obj1,obj2)   -->also works wthout giving {}

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
     {
        id:1,
        email : "higehr4@mail.com"
     },
     {
             id:12,
             email : "higehr@3mail.com"
     },
     {
                  id:31,
                  email : "higehr3@mail.com"
     }

]

 console.log(users[1].email);


console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));

console.log(user2.hasOwnProperty('isLoggedIn')); //true

console.log(user2.hasOwnProperty('isLogged'));  //false