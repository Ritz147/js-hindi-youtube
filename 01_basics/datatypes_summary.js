//  const id=Symbol('123')
//  const anotherId=Symbol('123')
//  console.log(id==anotherId)
//  console.log(id===anotherId)
//  const bigNumber=3455678890123n
//  console.log(typeof bigNumber)
//Arrays,Objects,Functions
// const heroes=["Ritu",'Harshit','Rishabh'];
// let myObj={
//     name:'hitesh',
//     age:22
// }
// const myfunc=function(){
//  console.log("Hello World")
// }
// console.log(typeof heroes)
// console.log(typeof myObj)
// console.log(typeof myfunc)
// let myName="Ritu"
// let anotherName=myName
// anotherName="Harshit"
// console.log(myName)
// console.log(anotherName)
let userOne={
    email:"ritz.2002@gmail.com",
    upi:"7296@paytm"
}
let userTwo=userOne;
userTwo.email='harshit@gmail.com'
console.log(userOne.email)