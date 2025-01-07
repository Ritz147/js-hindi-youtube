// const tinderUser=new Object()
// console.log(tinderUser)
const tinderUser={};
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser)
// const regularuser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Ritu",
//             lastname:"Raj"
//         }
//     }
// }
// console.log(regularuser.fullname.userfullname.firstname);
// const obj1={
// 1:"a",2:"b"
// }
// const obj2={
// 3:"c",4:"d"
// }
// const obj4={obj1,obj2}
// console.log(obj4)
// const obj3={...obj1,...obj2}
// console.log(obj3)
// const obj5=Object.assign({},obj1,obj2)
// console.log(obj5)
// console.log(tinderUser.length);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
const course={
    coursename:'js in hindi',
    price:"999",
    courseInstructor:"Ritu"
}
//course.courseInstructor
const {courseInstructor:instructor}=course
console.log(instructor)