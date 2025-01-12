const user={
    username:"ritu",
    loginCount: 8,
    signedIn: true,
    getUserDetails:function(){
      return this//current context
    }
}
//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this)//empty paranthesis ye value changed hoti hai browser mei//browser me window object milta hai 
// const user2={
//     username:"ritu",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails:function(){
//       return this//current context
//     }
// }//agar hume multiple objects banane hain toh hume wapas user ko copy krna padega etc isliye hum constructor function use krte hain
//const promiseOne=new Promise()
//const date=new Date()
//ye constructor function alllow krta hai ki aap ek hi object literal se multiple instances bana sako
//new naya context banane ke liye kaam aata hai
function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome , ${this.username}`)
    }
    //return this impicitly hota hi hai
}
const userOne=new User('hitesh',12,true)
const userTwo=new User('ritu',10,false)
// console.log(userOne)
// console.log(userTwo)//agar hum without new User banate hain toh userTwo userOne ko overwrite kr dega
//new keyword user krte hain toh ek empty object create hota hai
//step 1:-new empty object created using new
//step 2:-constructor function is called due to new keyword
//step 3:- jo bhi arguments diye hain wo this keyword ke through inject ho jaate hain
//step 4:- mil jaata hai object
console.log(userOne.constructor)//reference hoti hai khud hi ke baare mein
