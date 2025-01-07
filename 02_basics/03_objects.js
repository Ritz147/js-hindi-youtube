//singleton
//object literals
const mySym=Symbol("key1")
const JsUser={
    [mySym]:"mykey1",
    "company":"Google",
    name:"Hitesh",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}


JsUser.greeting=function(){
    console.log(`Hello JS user ${this.name}`)
}
//console.log(JsUser.greeting);
//console.log(JsUser.greeting());
JsUser.greeting();
